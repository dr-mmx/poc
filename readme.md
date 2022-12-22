# poc
**poc** is a very buggy, hacky and dirty implementation of a blockchain that stores a registry of apps and their developers.

***DO NOT USE IT AT ALL***

## Testing
Start with resetting the chain:
```
ignite chain serve --reset-once
```

There are two wallets/addresses to play with `alice` and `bob`.

### Messages
In order to register an app on the registry run:
```
pocd tx poc register-app "parameters" --from DEV_WALLET -y
```

In order to deregister the app from the registry run:
```
pocd tx poc deregister-app APP_ID --from DEV_WALLET -y
```

In order to register a user to the app run:
```
pocd tx poc register-app-user APP_ID USER_ID --from DEV_WALLET -y
```

In order to deregister a user from the app run:
```
pocd tx poc deregister-app-user APP_ID USER_ID --from DEV_WALLET -y
```

### Querries
In oreder to list app parameters from the registry run:
```
pocd q poc show-app-parameters APP_ID
```

In oreder to list app users from the registry run:
```
pocd q poc show-app-users APP_ID
```

In oreder to list all app ids from a dev run:
```
pocd q poc show-dev-apps DEV_ID
```

## Implementation snippets
1. Scaffold module with bank integration [done]
2. Scaffold messages: [done]
    1. registerApp: parameters (appId <- H(parameters, devId)) [done] 
    2. registerAppUser: appId, userId [done]
    3. deregisterApp: appId [done]
    4. deregisterAppUser: appId, userId [done]
3. Scaffold querries: [done]
    1. showAppUsers: appId [done]
    2. showAppParameters: appId [done]
    3. showDevApps: appId [done]
3. Scaffold stores: [done]
    1. Map DevID -> list of AppID [done]
    2. Map AppID -> parameters and list of Users [done]
4. Logic:
    1. Register App: [done]
        1. Calculate appId
        2. Check if appId is unique
        3. Get 1001tokens from dev to the module
        4. Create app entry
        5. Add app entry to the store
        6. Emmit an event
        7. Return appId
    2. Register User: [done]
        1. Check if appId exists
        2. Check if the creator equals DevId
        3. Add UserID to the list
        4. Emit an event
    3. Geters: [done]
        1. Show-app-parameters [done]
        2. Show-app-users [done]
        3. Show-dev-apps [done]
    4. Remove UserId from AppId: [done]
        1. Find app using AppId
        2. Find UserId on the users list
        3. Remove every instance of UserId from the users list
        4. Update the app registry
        5. Emit an event
    5. Remove AppID: [done]
        1. Find app in the registry
        2. Remove app from the store
        3. Find devId on dev registry
        4. Remove app from dev entry
        5. If dev entry has not apps remove it from the registry
        6. Emit an event

## Notes
1. Lists are implemented as a string, each entry is divided with "!", there are no sanity-checks implemented.
2. `AppId` is automatically calculated as a hash of concatentation of parameters and developer address.
