import{u as r,j as e}from"./index-BZfQV8hD.js";const l={title:"Verifying Stone proofs on Ethereum",description:"undefined"};function n(i){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"verifying-stone-proofs-on-ethereum",children:["Verifying Stone proofs on Ethereum",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verifying-stone-proofs-on-ethereum",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"A comprehensive guide for creating and verifying Stone proofs on Ethereum networks."}),`
`,e.jsxs(s.h2,{id:"table-of-contents",children:["Table of Contents",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#table-of-contents",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#prerequisites",children:"Prerequisites"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#installation",children:"Installation"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#creating-and-verifying-proofs",children:"Creating and Verifying Proofs"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#ethereum-verification",children:"Ethereum Verification"})}),`
`]}),`
`,e.jsxs(s.h2,{id:"prerequisites",children:["Prerequisites",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prerequisites",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Before you begin, ensure you are on ",e.jsx(s.code,{children:"linux/amd64"})," with ",e.jsx(s.code,{children:"AVX"}),` supported.
Running the prover is also supported on `,e.jsx(s.code,{children:"Apple M3"})," chip takes about ",e.jsx(s.code,{children:"512 secs"}),`.
Running the prover in wsl Ubuntu on `,e.jsx(s.code,{children:"Ryzen 7"})," takes about ",e.jsx(s.code,{children:"252 secs"}),"."]}),`
`,e.jsxs(s.h2,{id:"installation",children:["Installation",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#installation",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"1-install-stone-cli-with-the-updated-cairo-proof-parse",children:["1. Install Stone CLI with the updated ",e.jsx(s.code,{children:"cairo-proof-parse"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-install-stone-cli-with-the-updated-cairo-proof-parse",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# Clone the repository"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"git clone https://github.com/guha-rahul/stone-cli.git"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# Navigate to the directory"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cd stone-cli/"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# Install using Cargo"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cargo install --path ."})})]})}),`
`,e.jsxs(s.h3,{id:"check-stone-cli-has-been-installed",children:["Check Stone Cli has been installed",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#check-stone-cli-has-been-installed",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stone-cli --help"})})})}),`
`,e.jsx(s.p,{children:"Running the command should output this"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CLI for proving Cairo programs and serializing proofs for Starknet and Ethereum"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Usage: stone-cli <"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"COMMAND"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Commands:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  prove             "})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  prove-bootloader  "})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  verify            "})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  serialize-proof   "})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  help              Print this message or the help of the given subcommand(s)"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Options:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  -h, --help     Print help"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  -V, --version  Print version"})})]})}),`
`,e.jsxs(s.h2,{id:"creating-and-verifying-proofs",children:["Creating and Verifying Proofs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#creating-and-verifying-proofs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"1-generate-the-stone-proof",children:["1. Generate the Stone Proof",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-generate-the-stone-proof",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stone-cli prove-bootloader \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --cairo_programs ./examples/cairo0/bitwise_output.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --layout starknet \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --parameter_file ./tests/configs/bootloader_cpu_air_params.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --output bootloader_proof.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --fact_topologies_output fact_topologies.json"})})]})}),`
`,e.jsxs(s.h2,{id:"2-verify-the-proof-locally",children:["2. Verify the Proof Locally",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-verify-the-proof-locally",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stone-cli verify \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --proof bootloader_proof.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --annotation_file annotation.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --extra_output_file extra_output.json"})})]})}),`
`,e.jsxs(s.h2,{id:"3-serialize-the-proof-for-ethereum",children:["3. Serialize the Proof for Ethereum",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-serialize-the-proof-for-ethereum",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"stone-cli serialize-proof \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --proof bootloader_proof.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --annotation_file annotation.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --extra_output_file extra_output.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --network ethereum \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    --output bootloader_serialized_proof.json"})})]})}),`
`,e.jsxs(s.p,{children:["Make sure to not delete the ",e.jsx(s.code,{children:"bootloader_serialized_proof.json"})," and ",e.jsx(s.code,{children:"fact_topologies.json"})," files for the next steps."]}),`
`,e.jsxs(s.h2,{id:"ethereum-verification",children:["Ethereum Verification",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ethereum-verification",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"1-set-up-evm-adapter",children:["1. Set Up EVM Adapter",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-set-up-evm-adapter",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["We need the ",e.jsx(s.a,{href:"https://github.com/zksecurity/stark-evm-adapter/tree/add-build-configs",children:"evm-adapter-cli"})," for verifying on ethereum. We need to ",e.jsx(s.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:"install Foundry"}),` for  verification.
We also need to `,e.jsx(s.a,{href:"https://book.getfoundry.sh/getting-started/installation",children:"install Foundry"}),` for  running it.
We also need a Ethereum Mainnet Rpc which we can get from `,e.jsx(s.a,{href:"https://www.alchemy.com/",children:"Alchemy"}),"."]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5",fontWeight:"bold","--shiki-dark":"#6CB6FF","--shiki-dark-font-weight":"bold"},children:"# Clone the repository"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"git clone https://github.com/zksecurity/stark-evm-adapter.git"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"cd stark-evm-adapter/"})})]})}),`
`,e.jsxs(s.h3,{id:"2-run-verification",children:["2. Run Verification",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-run-verification",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"FORK_URL=<"}),e.jsx(s.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"ETHEREUM-MAINNET-RPC"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"> \\"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ANNOTATED_PROOF=./bootloader_serialized_proof.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    FACT_TOPOLOGIES=./fact_topologies.json \\"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    cargo run --example verify_stone_proof"})})]})}),`
`,e.jsxs(s.h3,{id:"3-successful-verification-output",children:["3. Successful Verification Output",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-successful-verification-output",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Upon successfull proof verification we can get something like this 🥳"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Anvil is running."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Test wallet address: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verifying trace decommitments:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: Trace 0"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: Trace 1"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: Trace 2"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verifying FRI decommitments:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 0"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 1"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 2"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 3"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 4"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 5"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 6"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: FRI statement: 7"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: register continuous page: 0"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verifying main proof:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"Verified: Main proof"})})]})})]})}function d(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{d as default,l as frontmatter};
