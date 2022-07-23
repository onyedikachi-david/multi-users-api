# multi-users-api
Reach-lang 72 hour Challenge

## level2 --> https://github.com/onyedikachi-david/multi-users-api/tree/level2
## level3 --> https://github.com/onyedikachi-david/multi-users-api/tree/level3


## Level one challenge [Done]

### Log message bellow

<!-- ➔ Level 1 ($20)
      ◆ Write a program that allows multiple users to attach to the same contract.
          ● Define one (1) Participant to deploy the contract
          ● Define one (1) API participant
              ○ This allows multiple users to attach as Bob (Bobs)
          ● Create an array for the new users
          ● Create a function to reuse when creating new Bob users (Bobs).
              ○ This should include newTestAccount
              ○ This should include attaching the account to the backend
                  ◆ Be sure to attach to Alice’s contract information
              ○ Add only the address of each account to your users array
          ● This should be done in 2 files
              ○ index.rsh and index.mjs
          ● Console messages
              ○ Include a message when Alice is ready to accept Attachers
                  ◆ Alice should interact in an only block with this function
              ○ Include a message when you are creating new Bob users
              ○ Display your users array -->
<!-- #1 [internal] load build definition from Dockerfile
#1 sha256:e7b6e17114898b6232d8615e3e41e57dadf3821b87c9a7c3d5bed86cfe315854
#1 transferring dockerfile: 38B done
#1 DONE 0.0s

#2 [internal] load .dockerignore
#2 sha256:9e0e03c58215f7b32e94c55bc30b0bc7e0886d513334c0353d4a5fb212a91d91
#2 transferring context: 34B done
#2 DONE 0.0s

#3 [internal] load metadata for docker.io/reachsh/runner:0.1.11
#3 sha256:2053ff50adb62251da4a88ccb4b08b45a32f1c2042e08b65f8ecb2c5cd21f412
#3 DONE 0.0s

#6 [1/2] FROM docker.io/reachsh/runner:0.1.11
#6 sha256:1db9d00157f68f22bec4fbf6fc0231a1036d478eeeb01ef16a128a15f588a6f5
#6 DONE 0.0s

#5 [internal] load build context
#5 sha256:4d28d8d89952f443c5411c303b69500dbd760a776463d49af885fc1e62387eac
#5 transferring context: 3.48MB 2.5s done
#5 DONE 2.8s

#6 [1/2] FROM docker.io/reachsh/runner:0.1.11
#6 sha256:1db9d00157f68f22bec4fbf6fc0231a1036d478eeeb01ef16a128a15f588a6f5
#6 CACHED

#4 [2/2] COPY . /app
#4 sha256:fc1064788d0a9d1b052a5e432d5da7ea587c4cdea159b93544f5fdbd458d03ea
#4 DONE 16.8s

#7 exporting to image
#7 sha256:e8c613e07b0b7ff33893b694f7759a10d42e180f2b4dc349fb57dc6b71dcab00
#7 exporting layers
#7 exporting layers 9.4s done
#7 writing image sha256:b5e45545eed1ebf3de8d5912eedaa2905044508f2d3f3b09b447d74c8068f719
#7 writing image sha256:b5e45545eed1ebf3de8d5912eedaa2905044508f2d3f3b09b447d74c8068f719 0.0s done
#7 naming to docker.io/reachsh/reach-app-multi-users-api:0.1.11 0.0s done
#7 DONE 9.5s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
Creating reach-devnet-algo ... 
Creating reach-devnet-algo ... done
Creating 2022-07-23t14-55-33z-qbo2_reach-app-multi-users-api_run ... 
Creating 2022-07-23t14-55-33z-qbo2_reach-app-multi-users-api_run ... done

> index
> node --experimental-modules --unhandled-rejections=strict index.mjs

Creating deployer test account

        Contract was successfully deployed, contract info is: 3 -->
        
<!-- New user created...
New user created...
New user created...
New user created...
0: user address ==> "B5XN5OJXSDV2QPFAVU5KOEMVEKNZELCDQK3VR3HG5ZXINRUCOHM24WZJQA"
1: user address ==> "K4DLO4BT36ZDZGCQH35ESLHES7SLP6KKEFHPU44EDIQ54A523U6P2YPKIY"
2: user address ==> "UTBAHVNETXP532GJEQEBT433Q5NDD3BTPHHJBVVKBFGSRW7RNKOXWSC7FQ"
3: user address ==> "Z6FLNSX6T7WRAZRFNDUSKTE7573KDCVGOUNO7OJGVA4BAWMHI67MIVDMIQ"
 -->
