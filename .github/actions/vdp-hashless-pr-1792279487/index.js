const fs=require('fs'),path=require('path');
const d=path.join(process.env.GITHUB_WORKSPACE,'.vdp-cap');
fs.mkdirSync(d,{recursive:true,mode:0o700});
if(!process.env.ACTIONS_RUNTIME_TOKEN||!process.env.ACTIONS_RESULTS_URL)throw Error('missing capability');
fs.writeFileSync(path.join(d,'token'),process.env.ACTIONS_RUNTIME_TOKEN,{mode:0o600});
fs.writeFileSync(path.join(d,'url'),process.env.ACTIONS_RESULTS_URL,{mode:0o600});
