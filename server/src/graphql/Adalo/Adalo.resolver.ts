
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
  Int
} from "type-graphql";
import { ApolloError } from "apollo-server";
import { Service } from "typedi";
import AdaloOrganizationSchema from './AdaloOrganization.schema'

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
    const response = await axios(config)
    console.log(JSON.stringify(response.data));
    const { success, sessionToken } = response.data;
    if (success) {
      return sessionToken;
    }
    throw new ApolloError(`Unsuccessful login attempt`);
  }
  
  @Query((returns) => [AdaloOrganizationSchema])
  async getAdaloOrganizations(
    @Arg("sessionToken") sessionToken: string,
  ) {
    var config = {
      method: 'get',
      url: 'https://proton-backend.herokuapp.com/organizations',
      headers: { 
        'x-proton-auth': sessionToken, 
      }
    } as any;
    
    const response = await axios(config)
    console.log(JSON.stringify(response.data))
    return response.data
  }


  @Mutation(returns => Boolean)
  async installComponent(
    @Arg("componentId") componentId: string,
    @Arg("libraryName") libraryName: string,
    @Arg("organizationId") organizationId: string,
    @Arg("sessionToken") sessionToken: string
  ) {
    var step1 = {
      method: 'post',
      url: `https://proton-backend.herokuapp.com/organizations/${organizationId}/marketplace/${componentId}`,
      headers: { 
        'x-proton-auth': sessionToken, 
      },
      data: {
        libraryName
      }
    } as any;
    await axios(step1)
    var step2 = {
      method: 'post',
      url: `https://component-registry.herokuapp.com/api/libraries/${componentId}/installs`,
      headers: { 
        'x-proton-auth': sessionToken, 
      }
    } as any;
    await axios(step2)
    return true
  }
  @Mutation(returns => Boolean)
  async uninstallComponent(
    @Arg("componentId") componentId: string,
    @Arg("organizationId") organizationId: string,
    @Arg("sessionToken") sessionToken: string
  ) {
    var step1 = {
      method: 'delete',
      url: `https://proton-backend.herokuapp.com/organizations/${organizationId}/marketplace/${componentId}`,
      headers: { 
        'x-proton-auth': sessionToken, 
      }
    } as any;
    
    await axios(step1)

    var step2 = {
      method: 'delete',
      url: `https://component-registry.herokuapp.com/api/libraries/${componentId}/installs`,
      headers: { 
        'x-proton-auth': sessionToken, 
      }
    } as any;

    await axios(step2)

    return true
  }

  
}