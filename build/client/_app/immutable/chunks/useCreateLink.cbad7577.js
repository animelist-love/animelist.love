const t=r=>r.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,""),n=r=>r.map(e=>{if(typeof e=="string"||typeof e=="number")return e;if(e.convert==="-")return t(e.value);if(e.convert==="lowcase")return e.value.toLowerCase()}).join("");export{n as u};