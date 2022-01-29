import { ObjectType, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { VimeoVideo } from "../../entity/VimeoVideo";

@Service()
@Resolver(VimeoVideo)
export class HowToVideoResolver {
  @Query(returns => [VimeoVideo])
  async getHowToVimeoVideos() {
    return VimeoVideo.find()
  }
}