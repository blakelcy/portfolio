function x(){}const F=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function P(){return Object.create(null)}function j(t){t.forEach(E)}function S(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function A(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function B(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const c of n)c(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t,n,e){t.$$.on_destroy.push(q(n,e))}function D(t,n,e,c){if(t){const r=y(t,n,e,c);return t[0](r)}}function y(t,n,e,c){return t[1]&&c?w(e.ctx.slice(),t[1](c(n))):e.ctx}function G(t,n,e,c){if(t[2]&&c){const r=t[2](c(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],h=Math.max(n.dirty.length,r.length);for(let s=0;s<h;s+=1)a[s]=n.dirty[s]|r[s];return a}return n.dirty|r}return n.dirty}function H(t,n,e,c,r,a){if(r){const h=y(n,e,c,a);t.p(h,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}let f;function _(t){f=t}function m(){if(!f)throw new Error("Function called outside component initialization");return f}function J(t){m().$$.on_mount.push(t)}function K(t){m().$$.after_update.push(t)}function L(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const l=[],b=[];let u=[];const g=[],k=Promise.resolve();let p=!1;function v(){p||(p=!0,k.then(z))}function N(){return v(),k}function O(t){u.push(t)}const d=new Set;let o=0;function z(){if(o!==0)return;const t=f;do{try{for(;o<l.length;){const n=l[o];o++,_(n),M(n.$$)}}catch(n){throw l.length=0,o=0,n}for(_(null),l.length=0,o=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(l.length);for(;g.length;)g.pop()();p=!1,d.clear(),_(t)}function M(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];u.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),u=n}export{K as a,b,C as c,D as d,A as e,G as f,I as g,L as h,F as i,O as j,S as k,P as l,z as m,x as n,J as o,B as p,Q as q,j as r,U as s,N as t,H as u,f as v,_ as w,E as x,l as y,v as z};
