# Tribe GraphQL Client

A typescript client to interact with the Tribe GraphQL API.

# How to use

## Basic Usage

you can provide graphql url and token as options to the client.

```typescript
import { TribeClient } from '@tribeplatform/gql-client'

const t = new TribeClient({
  graphqlUrl: 'localhost:4000/graphql',
  accessToken: '<your-access-token>',
})
```

or you can set the url in the environment variable `TRIBE_GQL_ENDPOINT`.

``` shell
export TRIBE_GQL_ENDPOINT=http://localhost:4000/graphql
```

``` typescript
const t = new TribeClient({
  accessToken?: '<your-access-token>',
})
```

you can also set the token per request.

``` typescript
const t = new TribeClient({
  graphqlUrl?: 'localhost:4000/graphql',
})

t.network.get('basic', accessToken: '<your-access-token>')
```

## App Usage

To use the client in an app, you need to provide
`clientId` and `clientSecret` when initializing `TribeClient`.
Then you can use `generateToken` to generate a token
per network by providing `networkId` to make queries.
In case you want to act as a member you can provide `memberId`
to `generateToken`.

``` typescript
const t = new TribeClient({
  graphqlUrl: 'https://app.dev.tribe.so/api/gateway',
  clientId: '<your-client-id>',
  clientSecret: '<your-client-secret>',
})

t.generateToken({
  networkId: '<your-network-id>',
  memberId: '<acting-member-id>',
}).then(token => {

  // you can set the token globally
  t.setToken(token)
  
  // or use it per request
  t.network.get('basic', token)
})
```

# Supported Mutations

#### archiveMemberSchemaField(key: String!): Network!
* ✅ t.network.archiveMemberSchemaField()

#### updateMemberSchemaField(input: UpdateCustomFieldSchemaInput!): Network!
* ✅ t.network.updateMemberSchemaField()

#### addMemberSchemaField(input: CustomFieldSchemaInput!): Network!
* ✅ t.network.addMemberSchemaField()

#### addReaction(input: AddReactionInput!, postId: ID!): Action!
* ✅ t.posts.addReaction()

#### addSpaceMembers(input: [AddSpaceMemberInput!]!, spaceId: ID!): [SpaceMember!]!
* ✅ t.spaceMembers.add()

#### addTrialPlan(trial: AddTrialInput!): Plan!
* ❌

#### approveSpaceMembershipRequest(): Action!
* ✅ t.spaceMembership.approveRequest()

#### cancelEmailUpdate(id: ID): Action!
* ✅ t.members.cancelEmailUpdate()

#### changeNetworkSubscriptionPlan(name: PlanName!): Network!
* ❌

#### clearNewDomain: Action!
* ✅ t.network.clearNewDomain()

#### clearNotificationsCount: Action!
* ✅ t.notifications.clearNotificationsCount()

#### confirmResetPassword(input: ConfirmResetPasswordInput!): Action!
* ❌

#### createAccessGroup(input: CreateAccessGroupInput!): AccessGroup!
* ❌

#### createCollection(input: CreateCollectionInput!): Collection!
* ✅ t.collections.create()

#### createEmojis(input: [CreateEmojiInput!]!): [Emoji!]!
* ✅ t.media.createEmojis()

#### createImages(input: [CreateImageInput!]!): [SignedUrl!]!
* ✅ t.media.createImages()

#### createMigrationRequest(): ImportRequest!
* ❌

#### createNetwork(input: AddNetworkInput!): AuthTokenWithOtp!
* ❌

#### createPermission(input: CreatePermissionInput!): Permission!
* ❌

#### createPost(input: CreatePostInput!, spaceId: ID!): Post!
* ✅ t.posts.create()

#### createPostTypeTemplate(input: CreatePostTypeTemplateInput!): PostTypeTemplate!
* ❌

#### createReply(input: CreatePostInput!, postId: ID!): Post!
* ✅ t.posts.reply()

#### createReport(input: CreateReportInput!): ModerationItem!
* ❌

#### createSpace(input: CreateSpaceInput!): Space!
* ✅ t.spaces.create()

#### createSpaceType(input: CreateSpaceTypeInput!): SpaceType!
* ✅ t.spaces.createType()

#### createTag(input: CreateTagInput!, spaceId: ID!): Tag!
* ✅ t.tags.create()

#### declineSpaceMembershipRequest(): Action!
* ✅ t.spaceMembership.declineRequest()

#### deleteAccessGroup(id: ID!): Action!
* ❌

#### deleteCollection(id: ID!): Action!
* ✅ t.collections.delete()

#### deleteMember(id: ID!): Action!
* ✅ t.members.delete()

#### deleteNetwork: Action!
* ❌

#### deleteNotification(notificationId: ID!): Action!
* ✅ t.notifications.deleteNotification()

#### deleteNotifications(ids: [ID!]): Action!
* ✅ t.notifications.deleteNotifications()

#### deletePermission(id: ID!): Action!
* ❌

#### deletePost(id: ID!): Action!
* ✅ t.posts.delete()

#### deleteSpace(id: ID!): Action!
* ✅ t.spaces.delete()

#### deleteSpaceType(spaceTypeId: ID!): Action!
* ❌

#### deleteSsoMembership(memberId: String!, type: SsoType!): Action!
* ❌

#### extendCurrentTrial(newEndDate: DateTime!): Plan!
* ❌

#### globalCreateApp(input: CreateAppInput!): App!
* ❌

#### globalCreateWidget(appId: ID!, input: CreateWidgetInput!): Widget!
* ❌

#### globalDeleteAppSetting(): AppSetting!
* ❌

#### globalDeleteWidget(id: ID!): Action!
* ❌

#### globalRegenerateClientSecret(appId: ID!): App!
* ❌

#### globalUpdateApp(id: ID!, input: UpdateAppInput!): App!
* ❌

#### globalUpdateAppSetting(): AppSetting!
* ❌

#### globalUpdateWidget(id: ID!, input: UpdateWidgetInput!): Widget!
* ❌

#### hidePost(id: ID!): Action!
* ❌

#### installApp(appId: ID!, input: InstallAppInput!): AppInstallation!
* ✅ t.app.install()

#### installPostTypeTemplate(input: InstallPostTypeTemplateInput!): PostType!
* ❌

#### inviteMembers(input: InviteMembersInput!): [MemberInvitation!]!
* ❌

#### joinNetwork(input: JoinNetworkInput!): AuthToken!
* ✅ t.auth.joinNetwork()

#### joinNetworkWithInvitationLink(input: JoinNetworkWithLinkInput!): AuthToken!
* ✅ t.auth.joinNetworkWithInvitationLink()

#### joinNetworkWithToken(input: JoinNetworkWithTokenInput!): AuthToken!
* ✅ t.auth.joinNetworkWithToken()

#### joinSpace(spaceId: ID!): Action!
* ✅ t.spaces.join()

#### leaveSpace(spaceId: ID!): Action!
* ✅ t.spaces.leave()

#### organizeCollections(ids: [String!]!): Action!
* ✅ t.collections.organize()

#### organizeSpacesInCollection(): Action!
* ✅ t.spaces.organize()

#### pinPostToSpace(postId: ID!): Action!
* ✅ t.posts.pinToSpace()

#### pinReplyToPost(postId: ID!, replyId: ID!): Action!
* ❌

#### purchase(input: PurchaseInput!): Subscription!
* ❌

#### readNotification(notificationId: ID!): Action!
* ✅ t.notifications.readNotification()

#### readNotifications(ids: [ID!]): Action!
* ✅ t.notifications.readNotifications()

#### removeReaction(postId: ID!, reaction: String!): Action!
* ✅ t.posts.removeReaction()

#### removeSpaceMembers(memberIds: [ID!]!, spaceId: ID!): [Action!]!
* ✅ t.spaceMembers.remove()

#### requestGlobalTokenCode(input: RequestGlobalTokenInput!): Action!
* ❌

#### requestSpaceMembership(spaceId: ID!): SpaceJoinRequest!
* ✅ t.spaceMembership.request()

#### resendGlobalTokenCode(input: RequestGlobalTokenInput!): Action!
* ❌

#### resendVerification: Action!
* ✅ t.auth.resendVerification()

#### sendResetPasswordEmail(email: String!): Action!
* ✅ t.auth.sendResetPasswordEmail()

#### transferToNewDomain: Action!
* ✅ t.network.transferToNewDomain()

#### unhidePost(id: ID!): Action!
* ❌

#### uninstallApp(appInstallationId: ID!, reason: String): AppInstallation
* ✅ t.app.uninstall()

#### unpinPostFromSpace(postId: ID!): Action!
* ✅ t.posts.unpinFromSpace()

#### unpinReplyFromPost(postId: ID!, replyId: ID!): Action!
* ❌

#### unsubscribeFromNotification(input: UnsubscribeWithTokenInput!): Action!
* ✅ t.notifications.unsubscribe()

#### updateAccessGroup(id: ID!, input: UpdateAccessGroupInput!): AccessGroup!
* ❌

#### updateAppInstallation(): AppInstallation!
* ❌

#### updateAppNetworkSettings(appId: ID!, settings: String!): AppAction!
* ✅ t.app.updateNetworkSettings()

#### updateAppSpaceSetting(appId: ID!, settings: String!, spaceId: ID!): AppAction!
* ❌

#### updateBillingDetails(input: BillingDetailsInput!): BillingDetails!
* ❌

#### updateCollection(id: ID!, input: UpdateCollectionInput!): Action!
* ✅ t.collections.update()

#### updateCustomSso(input: UpdateCustomSsoInput!): Sso!
* ✅ t.auth.updateCustomSso()

#### updateDefaultSsoStatus(sso: DefaultSsoType!, status: SsoStatus!): Action!
* ✅ t.auth.updateDefaultSsoStatus()

#### updateImage(id: String!, input: UpdateImageInput!): Image!
* ❌

#### updateMember(id: ID, input: UpdateMemberInput!): Member!
* ✅ t.members.update()

#### updateMemberNetworkNotificationSettings(): MemberNetworkNotificationSettings!
* ✅ t.notifications.updateNetworkSettings()

#### updateMemberSpaceNotificationSettings(): MemberSpaceNotificationSettings!
* ❌

#### updateMemberSpaceRole(): Action!
* ❌

#### updateModerationItem(id: ID!, input: UpdateModerationItemInput!): Action!
* ✅ t.moderation.updateItem()

#### updateModerationSettings(): ModerationSettings!
* ✅ t.moderation.updateSettings()

#### updateNetwork(input: UpdateNetworkInput!): Network!
* ✅ t.network.update()

#### updateNetworkCustomCapacities(): Network!
* ❌

#### updateNetworkStatus(input: UpdateNetworkStatusInput!): Action!
* ❌

#### updateNewDomain(input: UpdateNewDomainInput!): DomainTransferStatus!
* ✅ t.network.updateNewDomain()

#### updatePasswordWithToken(input: UpdatePasswordWithTokenInput!): Action!
* ❌

#### updatePermission(id: ID!, input: UpdatePermissionInput!): Permission!
* ❌

#### updatePost(id: ID!, input: UpdatePostInput!): Post!
* ✅ t.posts.update()

#### updateSpace(id: ID!, input: UpdateSpaceInput!): Space!
* ✅ t.spaces.update()

#### updateSpaceHighlightedTags(): Action!
* ❌

#### updateSpaceTagFilter(input: UpdateTagFilter!, spaceId: ID!): Action!
* ❌

#### updateSpaceType(id: ID!, input: UpdateSpaceTypeInput!): SpaceType!
* ❌

#### updateTag(id: ID!, input: UpdateTagInput!, spaceId: ID!): Tag!
* ✅ t.tags.update()

#### uploadMigrationFiles(): UploadCollectionsResponse!
* ❌

#### upsertTheme(input: UpsertTheme!): NewTheme!
* ✅ t.theme.upsert()

#### verifyMember(input: VerifyMemberInput!): AuthToken!
* ✅ t.auth.verifyMember()

#### verifyMemberEmail(input: VerifyMemberEmailInput!): Action!
* ❌

# Supported Queries

#### accessGroup(id: ID!): AccessGroup!
* ❌
#### accessGroups: [AccessGroup!]!
* ❌
#### app(id: ID, slug: String): App!
* ✅ t.app.get()
#### apps(): PaginatedApp!
* ✅ t.app.list()

#### getNetworkAppInstallations(): PaginatedAppInstallation!
* ✅ t.app.appInstallations()

#### authMember: Member!
* ❌
#### postTypes(): PaginatedPostType!
* ✅ t.posts.listPostTypes()

#### spacePostTypes(): PaginatedSpacePostType!
* ✅ t.spacePostType.list()
#### spacePostType(): SpacePostType!
* ✅ t.spacePostType.get()
#### updateSpacePostTypes(): [SpacePostType!]!
* ✅ t.spacePostType.update()
#### baskets(input: BasketsInput!): [Basket!]!
* ❌
#### billingDetails: BillingDetails!
* ✅ t.billing.details()
#### cancelSubscription: Action!
* ❌
#### collection(id: ID): Collection!
* ✅ t.collections.get()
#### collections(): [Collection!]!
* ✅ t.collections.list()
#### domainAvailability(input: DomainAvailabilityInput!): DomainAvailability!
* ✅ t.network.domainAvailability()
#### emailAvailability(email: String!): EmailAvailability!
* ❌
#### embed(input: EmbedInput!): Embed!
* ✅ t.media.embed()
#### exploreSpaces(): PaginatedSpace!
* ✅ t.spaces.explore()
#### feed(): PaginatedPost!
* ✅ t.posts.feed()
#### getAppNetworkSettings(appId: ID!): String!
* ✅ t.app.networkSettings()
#### getAppSpaceSettings(appId: ID!, spaceId: ID!): String!
* ✅ t.app.spaceSettings()
#### getAppWidget(appId: ID!, widgetId: ID!): Widget!
* ❌
#### getAppWidgets(): PaginatedWidget!
* ❌
#### getMemberAppInstallations(): PaginatedAppInstallation!
* ❌
#### globalApp(id: ID, slug: String): App!
* ❌
#### globalAppSettings(): AppSetting!
* ❌
#### globalAppWidget(appId: ID!, widgetId: ID!): Widget!
* ❌
#### globalAppWidgets(): PaginatedWidget!
* ❌
#### globalApps(): PaginatedApp!
* ❌
#### globalNetworks(): PaginatedNetwork!
* ❌
#### globalToken(input: GlobalTokenInput!): GlobalToken!
* ❌
#### impersonateLoginToNetwork(): AuthInfoWithOtp!
* ❌
#### invitationLinkValidity(id: String!): MemberInvitationLink!
#### limitedToken(): AppToken!
* ✅ t.getLimitedToken()
#### loginNetwork(input: LoginNetworkWithPasswordInput!): AuthToken!
* ✅ t.auth.login()
#### loginNetworkWithGlobalToken(): AuthToken!
* ❌
#### loginNetworkWithPassword(input: LoginNetworkWithPasswordInput!): AuthToken!
* ❌
#### loginSupportWithSsoCode(): SupportAuthToken!
* ❌
#### loginWithSsoCode(input: LoginWithSsoCodeInput!): AuthToken!
* ❌
#### media(id: ID!): Media!
* ❌
#### member(id: ID, username: String): Member!
* ✅ t.members.get()
#### memberInvitation(id: ID!): MemberInvitation!
* ✅ t.invitations.list()
#### memberInvitationLink: MemberInvitationLink!
* ✅ t.invitations.getLink()
#### memberInvitationValidity(token: String!): MemberInvitation!
* ✅ t.invitations.validate()
#### memberInvitations(): PaginatedMemberInvitation!
* ✅ t.invitations.list()
#### memberNotificationSettings(id: ID): MemberNotificationSettings!
* ❌
#### memberPosts(): PaginatedPost!
* ✅ t.posts.byMember()
#### memberSpaceMembershipRequest(): [SpaceJoinRequest!]!
* ✅ t.spaceMemberships.getMemberRequests()
#### memberSpaces(): PaginatedSpaceMember!
* ✅ t.spaceMembers.listSpaces()
#### members(): PaginatedMember!
* ✅ t.memebrs.list()
#### moderationItem(id: ID!): ModerationItem!
* ✅ t.moderation.getItem()
#### moderationItemReporters(): PaginatedModerationItemReporter!
* ✅ t.moderation.getItemReporters()
#### moderationItems(): PaginatedModeration!
* ✅ t.moderation.getItems()
#### moderationSettings: ModerationSettings!
* ✅ t.moderation.settings()
#### network: Network!
* ✅ t.network.get()
#### networkApps(status: AppInstallationStatus): [App!]!
* ❌
#### networkPublicInfo: NetworkPublicInfo!
* ❌
#### networks(): PaginatedNetwork!
* ❌
#### networksMembers(): PaginatedPluralMember!
* ❌
#### newDomainStatus(domain: String!): DomainTransferStatus!
* ✅ t.network.newDomainStatus()
#### notifications(after: String, limit: Int!): PaginatedNotification!
* ✅ t.notifications.list()
#### notificationsCount: NotificationsCount!
* ✅ t.notifications.count()
#### passwordComplexity(password: String!): PasswordComplexity!
* ❌
#### permission(id: ID!): Permission!
* ❌
#### permissions: [Permission!]!
* ❌
#### post(id: ID!): Post!
* ✅ t.posts.get()
#### postReactionParticipants(): PaginatedPostReactionParticipant!
* ✅ t.posts.reactionParticipants()
#### postType(id: ID!): PostType!
* ✅ t.posts.getPostType()
#### postTypeTemplates: [PostTypeTemplate!]!
* ❌
#### posts(): PaginatedPost!
* ✅ t.posts.list()
#### redirect(url: String!): Redirect!
* ❌
#### replies(): PaginatedPost!
* ✅ t.posts.replies()
#### report(input: ReportInput!, spaceId: String): Report!
* ✅ t.report.get()
#### roles(orderBy: RoleListOrderByEnum, reverse: Boolean): [Role!]!
* ✅ t.roles.list()
#### scopes(contexts: [PermissionsContextInput!]): Scopes!
* ❌
#### search(input: SearchInput!): SearchResult!
* ✅ t.search()
#### space(id: ID, slug: ID): Space!
* ✅ t.spaces.get()
#### spaceMembers(): PaginatedSpaceMember!
* ✅ t.spaceMembers.listMembers()
#### spaceMembershipRequests(): [SpaceJoinRequest!]!
* ✅ t.spaceMembership.getRequests()
#### spacePinnedPosts(spaceId: ID!): [Post!]!
* ✅ t.spaces.pinnedPosts()
#### spaceRoles(): [SpaceRole!]!
* ✅ t.spaceRoles.list()
#### spaces(): PaginatedSpace!
* ✅ t.spaces.list()
#### ssoMemberships(memberId: String!): [SsoMembership!]!
* ✅ t.auth.ssoMemberships()
#### ssoUrl(input: SsoUrlInput!): SsoUrl!
* ✅ t.auth.ssoUrl()
#### ssos(status: SsoStatus): [Sso!]!
* ✅ t.auth.ssos()
#### subscription(input: subscriptionInput!): Subscription!
* ❌
#### supportNetworkTokens(networkId: String!): SupportLimitedAuthToken!
* ❌
#### supportSsoUrl(input: SupportSsoUrlInput): SupportSsoUrl!
* ❌
#### tagPosts(): PaginatedPost!
* ❌
#### tags(): PaginatedTag!
* ✅ t.tags.list()
#### tokens(): AuthToken!
* ❌
#### usernameAvailability(username: String!): UsernameAvailability!
* ❌
#### vatTypes: [VatTypeInfo!]!
* ❌
#### widget(id: ID!): Slate!
* ❌
