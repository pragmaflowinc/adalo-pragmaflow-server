import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdaloUserSchema = {
  __typename?: 'AdaloUserSchema';
  OrganizationUser: OrganizationUserSchema;
  createdAt: Scalars['String'];
  developer: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['Float'];
  ip?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type AppsSchema = {
  __typename?: 'AppsSchema';
  acessedAt: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Component = {
  __typename?: 'Component';
  componentId: Scalars['String'];
  description: Scalars['String'];
  githubUrl: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['Float'];
  libraryName: Scalars['String'];
  name: Scalars['String'];
  youtubeUrl: Scalars['String'];
};

export type InvitationSchema = {
  __typename?: 'InvitationSchema';
  OrganizationId: Scalars['Float'];
  appId?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  createdByUserId: Scalars['Float'];
  email: Scalars['String'];
  expiresAt: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  installComponent: Scalars['Boolean'];
  submitFeedback: Scalars['Boolean'];
  uninstallComponent: Scalars['Boolean'];
};


export type MutationInstallComponentArgs = {
  accessToken: Scalars['String'];
  componentId: Scalars['String'];
};


export type MutationSubmitFeedbackArgs = {
  content: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
};


export type MutationUninstallComponentArgs = {
  componentId: Scalars['String'];
  organizationId: Scalars['String'];
  sessionToken: Scalars['String'];
};

export type OrganizationSchema = {
  __typename?: 'OrganizationSchema';
  Invitations: Array<InvitationSchema>;
  OrganizationUser: OrganizationUserSchema;
  Users: Array<AdaloUserSchema>;
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type OrganizationUserSchema = {
  __typename?: 'OrganizationUserSchema';
  OrganizationId: Scalars['Float'];
  UserId: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getAdaloOrganizationLicenses: Array<Scalars['String']>;
  getAdaloOrganizations: Array<OrganizationSchema>;
  getAdaloSession: Scalars['String'];
  getAppsList: Array<AppsSchema>;
  getBundle: Scalars['String'];
  getComponents: Array<Component>;
  getHowToVimeoVideos: Array<VimeoVideo>;
  getToDoList: Array<ToDoList>;
};


export type QueryGetAdaloOrganizationLicensesArgs = {
  organizationId: Scalars['String'];
  sessionToken: Scalars['String'];
};


export type QueryGetAdaloOrganizationsArgs = {
  sessionToken: Scalars['String'];
};


export type QueryGetAdaloSessionArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryGetAppsListArgs = {
  sessionToken: Scalars['String'];
};


export type QueryGetBundleArgs = {
  appId: Scalars['String'];
};

export type ToDoList = {
  __typename?: 'ToDoList';
  description: Scalars['String'];
  id: Scalars['Float'];
  status: Scalars['String'];
  title: Scalars['String'];
};

export type VimeoVideo = {
  __typename?: 'VimeoVideo';
  description: Scalars['String'];
  id: Scalars['Float'];
  title: Scalars['String'];
  videoUrl: Scalars['String'];
};

export type GetAdaloAppsQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;


export type GetAdaloAppsQuery = { __typename?: 'Query', getAppsList: Array<{ __typename?: 'AppsSchema', id: string, name: string, createdAt: string, updatedAt: string, acessedAt: string }> };

export type GetAdaloBundleQueryVariables = Exact<{
  appId: Scalars['String'];
}>;


export type GetAdaloBundleQuery = { __typename?: 'Query', getBundle: string };

export type GetAdaloSessionQueryVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type GetAdaloSessionQuery = { __typename?: 'Query', getAdaloSession: string };

export type GetComponentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetComponentsQuery = { __typename?: 'Query', getComponents: Array<{ __typename?: 'Component', componentId: string, name: string, libraryName: string, description: string, githubUrl: string, youtubeUrl: string, icon: string }> };

export type GetHowToVimeoVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHowToVimeoVideosQuery = { __typename?: 'Query', getHowToVimeoVideos: Array<{ __typename?: 'VimeoVideo', id: number, title: string, description: string, videoUrl: string }> };

export type GetAdaloOrganizationsQueryVariables = Exact<{
  sessionToken: Scalars['String'];
}>;


export type GetAdaloOrganizationsQuery = { __typename?: 'Query', getAdaloOrganizations: Array<{ __typename?: 'OrganizationSchema', id: number, name: string }> };

export type GetToDoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetToDoListQuery = { __typename?: 'Query', getToDoList: Array<{ __typename?: 'ToDoList', id: number, title: string, description: string, status: string }> };

export type InstallComponentMutationVariables = Exact<{
  accessToken: Scalars['String'];
  componentId: Scalars['String'];
}>;


export type InstallComponentMutation = { __typename?: 'Mutation', installComponent: boolean };

export type SubmitFeedbackMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  content: Scalars['String'];
}>;


export type SubmitFeedbackMutation = { __typename?: 'Mutation', submitFeedback: boolean };

export type UninstallComponentMutationVariables = Exact<{
  sessionToken: Scalars['String'];
  componentId: Scalars['String'];
  organizationId: Scalars['String'];
}>;


export type UninstallComponentMutation = { __typename?: 'Mutation', uninstallComponent: boolean };


export const GetAdaloAppsDocument = gql`
    query getAdaloApps($sessionToken: String!) {
  getAppsList(sessionToken: $sessionToken) {
    id
    name
    createdAt
    updatedAt
    acessedAt
  }
}
    `;

/**
 * __useGetAdaloAppsQuery__
 *
 * To run a query within a React component, call `useGetAdaloAppsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdaloAppsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdaloAppsQuery({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useGetAdaloAppsQuery(baseOptions: Apollo.QueryHookOptions<GetAdaloAppsQuery, GetAdaloAppsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdaloAppsQuery, GetAdaloAppsQueryVariables>(GetAdaloAppsDocument, options);
      }
export function useGetAdaloAppsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdaloAppsQuery, GetAdaloAppsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdaloAppsQuery, GetAdaloAppsQueryVariables>(GetAdaloAppsDocument, options);
        }
export type GetAdaloAppsQueryHookResult = ReturnType<typeof useGetAdaloAppsQuery>;
export type GetAdaloAppsLazyQueryHookResult = ReturnType<typeof useGetAdaloAppsLazyQuery>;
export type GetAdaloAppsQueryResult = Apollo.QueryResult<GetAdaloAppsQuery, GetAdaloAppsQueryVariables>;
export const GetAdaloBundleDocument = gql`
    query getAdaloBundle($appId: String!) {
  getBundle(appId: $appId)
}
    `;

/**
 * __useGetAdaloBundleQuery__
 *
 * To run a query within a React component, call `useGetAdaloBundleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdaloBundleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdaloBundleQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetAdaloBundleQuery(baseOptions: Apollo.QueryHookOptions<GetAdaloBundleQuery, GetAdaloBundleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdaloBundleQuery, GetAdaloBundleQueryVariables>(GetAdaloBundleDocument, options);
      }
export function useGetAdaloBundleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdaloBundleQuery, GetAdaloBundleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdaloBundleQuery, GetAdaloBundleQueryVariables>(GetAdaloBundleDocument, options);
        }
export type GetAdaloBundleQueryHookResult = ReturnType<typeof useGetAdaloBundleQuery>;
export type GetAdaloBundleLazyQueryHookResult = ReturnType<typeof useGetAdaloBundleLazyQuery>;
export type GetAdaloBundleQueryResult = Apollo.QueryResult<GetAdaloBundleQuery, GetAdaloBundleQueryVariables>;
export const GetAdaloSessionDocument = gql`
    query getAdaloSession($email: String!, $password: String!) {
  getAdaloSession(email: $email, password: $password)
}
    `;

/**
 * __useGetAdaloSessionQuery__
 *
 * To run a query within a React component, call `useGetAdaloSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdaloSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdaloSessionQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useGetAdaloSessionQuery(baseOptions: Apollo.QueryHookOptions<GetAdaloSessionQuery, GetAdaloSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdaloSessionQuery, GetAdaloSessionQueryVariables>(GetAdaloSessionDocument, options);
      }
export function useGetAdaloSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdaloSessionQuery, GetAdaloSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdaloSessionQuery, GetAdaloSessionQueryVariables>(GetAdaloSessionDocument, options);
        }
export type GetAdaloSessionQueryHookResult = ReturnType<typeof useGetAdaloSessionQuery>;
export type GetAdaloSessionLazyQueryHookResult = ReturnType<typeof useGetAdaloSessionLazyQuery>;
export type GetAdaloSessionQueryResult = Apollo.QueryResult<GetAdaloSessionQuery, GetAdaloSessionQueryVariables>;
export const GetComponentsDocument = gql`
    query GetComponents {
  getComponents {
    componentId
    name
    libraryName
    description
    githubUrl
    youtubeUrl
    icon
  }
}
    `;

/**
 * __useGetComponentsQuery__
 *
 * To run a query within a React component, call `useGetComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetComponentsQuery(baseOptions?: Apollo.QueryHookOptions<GetComponentsQuery, GetComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetComponentsQuery, GetComponentsQueryVariables>(GetComponentsDocument, options);
      }
export function useGetComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetComponentsQuery, GetComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetComponentsQuery, GetComponentsQueryVariables>(GetComponentsDocument, options);
        }
export type GetComponentsQueryHookResult = ReturnType<typeof useGetComponentsQuery>;
export type GetComponentsLazyQueryHookResult = ReturnType<typeof useGetComponentsLazyQuery>;
export type GetComponentsQueryResult = Apollo.QueryResult<GetComponentsQuery, GetComponentsQueryVariables>;
export const GetHowToVimeoVideosDocument = gql`
    query GetHowToVimeoVideos {
  getHowToVimeoVideos {
    id
    title
    description
    videoUrl
  }
}
    `;

/**
 * __useGetHowToVimeoVideosQuery__
 *
 * To run a query within a React component, call `useGetHowToVimeoVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHowToVimeoVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHowToVimeoVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHowToVimeoVideosQuery(baseOptions?: Apollo.QueryHookOptions<GetHowToVimeoVideosQuery, GetHowToVimeoVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHowToVimeoVideosQuery, GetHowToVimeoVideosQueryVariables>(GetHowToVimeoVideosDocument, options);
      }
export function useGetHowToVimeoVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHowToVimeoVideosQuery, GetHowToVimeoVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHowToVimeoVideosQuery, GetHowToVimeoVideosQueryVariables>(GetHowToVimeoVideosDocument, options);
        }
export type GetHowToVimeoVideosQueryHookResult = ReturnType<typeof useGetHowToVimeoVideosQuery>;
export type GetHowToVimeoVideosLazyQueryHookResult = ReturnType<typeof useGetHowToVimeoVideosLazyQuery>;
export type GetHowToVimeoVideosQueryResult = Apollo.QueryResult<GetHowToVimeoVideosQuery, GetHowToVimeoVideosQueryVariables>;
export const GetAdaloOrganizationsDocument = gql`
    query getAdaloOrganizations($sessionToken: String!) {
  getAdaloOrganizations(sessionToken: $sessionToken) {
    id
    name
  }
}
    `;

/**
 * __useGetAdaloOrganizationsQuery__
 *
 * To run a query within a React component, call `useGetAdaloOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdaloOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdaloOrganizationsQuery({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *   },
 * });
 */
export function useGetAdaloOrganizationsQuery(baseOptions: Apollo.QueryHookOptions<GetAdaloOrganizationsQuery, GetAdaloOrganizationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdaloOrganizationsQuery, GetAdaloOrganizationsQueryVariables>(GetAdaloOrganizationsDocument, options);
      }
export function useGetAdaloOrganizationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdaloOrganizationsQuery, GetAdaloOrganizationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdaloOrganizationsQuery, GetAdaloOrganizationsQueryVariables>(GetAdaloOrganizationsDocument, options);
        }
export type GetAdaloOrganizationsQueryHookResult = ReturnType<typeof useGetAdaloOrganizationsQuery>;
export type GetAdaloOrganizationsLazyQueryHookResult = ReturnType<typeof useGetAdaloOrganizationsLazyQuery>;
export type GetAdaloOrganizationsQueryResult = Apollo.QueryResult<GetAdaloOrganizationsQuery, GetAdaloOrganizationsQueryVariables>;
export const GetToDoListDocument = gql`
    query GetToDoList {
  getToDoList {
    id
    title
    description
    status
  }
}
    `;

/**
 * __useGetToDoListQuery__
 *
 * To run a query within a React component, call `useGetToDoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetToDoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetToDoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetToDoListQuery(baseOptions?: Apollo.QueryHookOptions<GetToDoListQuery, GetToDoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetToDoListQuery, GetToDoListQueryVariables>(GetToDoListDocument, options);
      }
export function useGetToDoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetToDoListQuery, GetToDoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetToDoListQuery, GetToDoListQueryVariables>(GetToDoListDocument, options);
        }
export type GetToDoListQueryHookResult = ReturnType<typeof useGetToDoListQuery>;
export type GetToDoListLazyQueryHookResult = ReturnType<typeof useGetToDoListLazyQuery>;
export type GetToDoListQueryResult = Apollo.QueryResult<GetToDoListQuery, GetToDoListQueryVariables>;
export const InstallComponentDocument = gql`
    mutation InstallComponent($accessToken: String!, $componentId: String!) {
  installComponent(accessToken: $accessToken, componentId: $componentId)
}
    `;
export type InstallComponentMutationFn = Apollo.MutationFunction<InstallComponentMutation, InstallComponentMutationVariables>;

/**
 * __useInstallComponentMutation__
 *
 * To run a mutation, you first call `useInstallComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstallComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [installComponentMutation, { data, loading, error }] = useInstallComponentMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *      componentId: // value for 'componentId'
 *   },
 * });
 */
export function useInstallComponentMutation(baseOptions?: Apollo.MutationHookOptions<InstallComponentMutation, InstallComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InstallComponentMutation, InstallComponentMutationVariables>(InstallComponentDocument, options);
      }
export type InstallComponentMutationHookResult = ReturnType<typeof useInstallComponentMutation>;
export type InstallComponentMutationResult = Apollo.MutationResult<InstallComponentMutation>;
export type InstallComponentMutationOptions = Apollo.BaseMutationOptions<InstallComponentMutation, InstallComponentMutationVariables>;
export const SubmitFeedbackDocument = gql`
    mutation SubmitFeedback($email: String, $subject: String, $content: String!) {
  submitFeedback(email: $email, subject: $subject, content: $content)
}
    `;
export type SubmitFeedbackMutationFn = Apollo.MutationFunction<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>;

/**
 * __useSubmitFeedbackMutation__
 *
 * To run a mutation, you first call `useSubmitFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitFeedbackMutation, { data, loading, error }] = useSubmitFeedbackMutation({
 *   variables: {
 *      email: // value for 'email'
 *      subject: // value for 'subject'
 *      content: // value for 'content'
 *   },
 * }); 
 */
export function useSubmitFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>(SubmitFeedbackDocument, options);
      }
export type SubmitFeedbackMutationHookResult = ReturnType<typeof useSubmitFeedbackMutation>;
export type SubmitFeedbackMutationResult = Apollo.MutationResult<SubmitFeedbackMutation>;
export type SubmitFeedbackMutationOptions = Apollo.BaseMutationOptions<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>;
export const UninstallComponentDocument = gql`
    mutation UninstallComponent($sessionToken: String!, $componentId: String!, $organizationId: String!) {
  uninstallComponent(
    sessionToken: $sessionToken
    componentId: $componentId
    organizationId: $organizationId
  )
}
    `;
export type UninstallComponentMutationFn = Apollo.MutationFunction<UninstallComponentMutation, UninstallComponentMutationVariables>;

/**
 * __useUninstallComponentMutation__
 *
 * To run a mutation, you first call `useUninstallComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUninstallComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uninstallComponentMutation, { data, loading, error }] = useUninstallComponentMutation({
 *   variables: {
 *      sessionToken: // value for 'sessionToken'
 *      componentId: // value for 'componentId'
 *      organizationId: // value for 'organizationId'
 *   },
 * });
 */
export function useUninstallComponentMutation(baseOptions?: Apollo.MutationHookOptions<UninstallComponentMutation, UninstallComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UninstallComponentMutation, UninstallComponentMutationVariables>(UninstallComponentDocument, options);
      }
export type UninstallComponentMutationHookResult = ReturnType<typeof useUninstallComponentMutation>;
export type UninstallComponentMutationResult = Apollo.MutationResult<UninstallComponentMutation>;
export type UninstallComponentMutationOptions = Apollo.BaseMutationOptions<UninstallComponentMutation, UninstallComponentMutationVariables>;