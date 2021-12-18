import axios from "axios";
import {
  Arg,
  Ctx,
  FieldResolver,
  Query,
  Resolver,
  Root,
  Authorized,
  Mutation,
  UnauthorizedError,
  Int,
} from "type-graphql";
import { ApolloError } from "apollo-server";
import { Service } from "typedi";
import AdaloOrganizationSchema from "./AdaloOrganization.schema";
import AppsSchema from "./AdaloApp.schema";

@Service()
@Resolver()
export class AdaloResolver {
  @Query((returns) => String)
  async getAdaloSession(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    var data = JSON.stringify({
      email,
      password,
    });

    var config = {
      method: "post",
      url: "https://backend.adalo.com/sessions",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    } as any;
    const response = await axios(config);
    const { success, sessionToken } = response.data;
    if (success) {
      return sessionToken;
    }
    throw new ApolloError(`Unsuccessful login attempt`);
  }

  @Query((returns) => [AdaloOrganizationSchema])
  async getAdaloOrganizations(@Arg("sessionToken") sessionToken: string) {
    var config = {
      method: "get",
      url: "https://proton-backend.herokuapp.com/organizations",
      headers: {
        "x-proton-auth": sessionToken,
      },
    } as any;

    const response = await axios(config);
    console.log(response.data)
    return response.data;
  }
 
  @Query((returns) => [String])
  async getAdaloOrganizationLicenses(@Arg("sessionToken") sessionToken: string, @Arg("organizationId") organizationId: string) {
    var config = {
      method: "get",
      url: `https://component-registry.herokuapp.com/api/licenses/org/${organizationId}`,
      headers: {
        "x-proton-auth": sessionToken,
      },
    } as any;

    const response = await axios(config);
    console.log(response.data)
    return response.data[organizationId];
  }

  @Mutation((returns) => Boolean)                    
  async installComponent(
    @Arg("componentId") componentId: string,
    @Arg("libraryName") libraryName: string,
    @Arg("organizationId") organizationId: string,
    @Arg("sessionToken") sessionToken: string
  ) {
    var installRequest = {
      method: "post",
      url: `https://component-registry.herokuapp.com/api/libraries/${componentId}/installs`,
      headers: {
        "x-proton-auth": sessionToken,
      },
      data: {
        orgId: organizationId
      }
    } as any;
    await axios(installRequest);
    return true;
  }
  @Mutation((returns) => Boolean)
  async uninstallComponent(
    @Arg("componentId") componentId: string,
    @Arg("organizationId") organizationId: string,
    @Arg("sessionToken") sessionToken: string
  ) {
    var uninstallRequest = {
      method: "delete",
      url: `https://component-registry.herokuapp.com/api/libraries/${componentId}/installs`,
      headers: {
        "x-proton-auth": sessionToken,
      },
    } as any;

    await axios(uninstallRequest);

    return true;
  }

  @Query((returns) => [AppsSchema])
  public getAppsList(@Arg("sessionToken") sessionToken: string) {
    return new Promise((resolve, reject) => {
      const socket = require("socket.io-client")(
        `https://proton-backend-ws.herokuapp.com/`,
        {
          transport: ["websocket", "polling"],
          query: {
            sessionToken,
          },
        }
      );
      socket.on("connect", () => {
        socket.emit("requestAll");
      });
      socket.on("appsList", (data: any) => {
        socket.disconnect();
        socket.close();
        resolve(data);
      });
    });
  }

  @Query((returns) => String)
  async getBundle(@Arg("appId") appId: string) {
    var config = {
      method: "get",
      url: `https://adalo.global.ssl.fastly.net/apps/${appId}`,
      headers: {
        "x-server-auth": "hplovecraft",
      },
    } as any;
    try {
      const response = await axios(config);
      return JSON.stringify(response.data);
    } catch (e) {
      throw new ApolloError("Something went wrong");
    }
  }
}
