(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="148",pd=0,Aa=1,fd=2,zl=1,md=2,nr=3,Xn=0,qe=1,wo=2,Sr=3,Ln=0,Si=1,La=2,Da=3,Ra=4,gd=5,yi=100,_d=101,vd=102,Ia=103,Na=104,xd=200,bd=201,wd=202,yd=203,Bl=204,Gl=205,Md=206,Sd=207,Cd=208,Ed=209,Td=210,Pd=0,Ad=1,Ld=2,uo=3,Dd=4,Rd=5,Id=6,Nd=7,Hl=0,kd=1,Fd=2,vn=0,Vd=1,Ud=2,Od=3,zd=4,Bd=5,Wl=300,Ei=301,Ti=302,ho=303,po=304,Jr=306,fo=1e3,Ye=1001,mo=1002,Ee=1003,ka=1004,Ls=1005,He=1006,Gd=1007,sr=1008,$n=1009,Hd=1010,Wd=1011,ql=1012,qd=1013,Hn=1014,Wn=1015,or=1016,jd=1017,Xd=1018,Ci=1020,$d=1021,Kd=1022,Ze=1023,Yd=1024,Zd=1025,qn=1026,Pi=1027,Jd=1028,Qd=1029,tp=1030,ep=1031,np=1033,Ds=33776,Rs=33777,Is=33778,Ns=33779,Fa=35840,Va=35841,Ua=35842,Oa=35843,ip=36196,za=37492,Ba=37496,Ga=37808,Ha=37809,Wa=37810,qa=37811,ja=37812,Xa=37813,$a=37814,Ka=37815,Ya=37816,Za=37817,Ja=37818,Qa=37819,tl=37820,el=37821,nl=36492,Kn=3e3,Qt=3001,rp=3200,sp=3201,jl=0,op=1,nn="srgb",ar="srgb-linear",ks=7680,ap=519,il=35044,rl="300 es",go=1035;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const a=o.indexOf(e);a!==-1&&o.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let a=0,h=o.length;a<h;a++)o[a].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fs=Math.PI/180,sl=180/Math.PI;function lr(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[c&255]+ye[c>>8&255]+ye[c>>16&255]+ye[c>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function ke(c,t,e){return Math.max(t,Math.min(e,c))}function lp(c,t){return(c%t+t)%t}function Vs(c,t,e){return(1-e)*c+e*t}function ol(c){return(c&c-1)===0&&c!==0}function _o(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Cr(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Re(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),a=this.x-t.x,h=this.y-t.y;return this.x=a*i-h*o+t.x,this.y=a*o+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,o,a,h,u,p,d){const f=this.elements;return f[0]=t,f[1]=o,f[2]=u,f[3]=e,f[4]=a,f[5]=p,f[6]=i,f[7]=h,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,h=i[0],u=i[3],p=i[6],d=i[1],f=i[4],m=i[7],_=i[2],b=i[5],y=i[8],x=o[0],g=o[3],S=o[6],D=o[1],E=o[4],L=o[7],P=o[2],N=o[5],F=o[8];return a[0]=h*x+u*D+p*P,a[3]=h*g+u*E+p*N,a[6]=h*S+u*L+p*F,a[1]=d*x+f*D+m*P,a[4]=d*g+f*E+m*N,a[7]=d*S+f*L+m*F,a[2]=_*x+b*D+y*P,a[5]=_*g+b*E+y*N,a[8]=_*S+b*L+y*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],u=t[5],p=t[6],d=t[7],f=t[8];return e*h*f-e*u*d-i*a*f+i*u*p+o*a*d-o*h*p}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],u=t[5],p=t[6],d=t[7],f=t[8],m=f*h-u*d,_=u*p-f*a,b=d*a-h*p,y=e*m+i*_+o*b;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return t[0]=m*x,t[1]=(o*d-f*i)*x,t[2]=(u*i-o*h)*x,t[3]=_*x,t[4]=(f*e-o*p)*x,t[5]=(o*a-u*e)*x,t[6]=b*x,t[7]=(i*p-d*e)*x,t[8]=(h*e-i*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,a,h,u){const p=Math.cos(a),d=Math.sin(a);return this.set(i*p,i*d,-i*(p*h+d*u)+h+t,-o*d,o*p,-o*(-d*h+p*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Us.makeScale(t,e)),this}rotate(t){return this.premultiply(Us.makeRotation(-t)),this}translate(t,e){return this.premultiply(Us.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Us=new Fe;function Xl(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function Kr(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function jn(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Xr(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Os={[nn]:{[ar]:jn},[ar]:{[nn]:Xr}},Se={legacyMode:!0,get workingColorSpace(){return ar},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.legacyMode||t===e||!t||!e)return c;if(Os[t]&&Os[t][e]!==void 0){const i=Os[t][e];return c.r=i(c.r),c.g=i(c.g),c.b=i(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}},$l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ce={r:0,g:0,b:0},Xe={h:0,s:0,l:0},Er={h:0,s:0,l:0};function zs(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}function Tr(c,t){return t.r=c.r,t.g=c.g,t.b=c.b,t}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=Se.workingColorSpace){return this.r=t,this.g=e,this.b=i,Se.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=Se.workingColorSpace){if(t=lp(t,1),e=ke(e,0,1),i=ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,h=2*i-a;this.r=zs(h,a,t+1/3),this.g=zs(h,a,t),this.b=zs(h,a,t-1/3)}return Se.toWorkingColorSpace(this,o),this}setStyle(t,e=nn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let a;const h=o[1],u=o[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Se.toWorkingColorSpace(this,e),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Se.toWorkingColorSpace(this,e),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u)){const p=parseFloat(a[1])/360,d=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return i(a[4]),this.setHSL(p,d,f,e)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=o[1],h=a.length;if(h===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Se.toWorkingColorSpace(this,e),this;if(h===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Se.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=nn){const i=$l[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Se.fromWorkingColorSpace(Tr(this,ce),t),ke(ce.r*255,0,255)<<16^ke(ce.g*255,0,255)<<8^ke(ce.b*255,0,255)<<0}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(Tr(this,ce),e);const i=ce.r,o=ce.g,a=ce.b,h=Math.max(i,o,a),u=Math.min(i,o,a);let p,d;const f=(u+h)/2;if(u===h)p=0,d=0;else{const m=h-u;switch(d=f<=.5?m/(h+u):m/(2-h-u),h){case i:p=(o-a)/m+(o<a?6:0);break;case o:p=(a-i)/m+2;break;case a:p=(i-o)/m+4;break}p/=6}return t.h=p,t.s=d,t.l=f,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(Tr(this,ce),e),t.r=ce.r,t.g=ce.g,t.b=ce.b,t}getStyle(t=nn){return Se.fromWorkingColorSpace(Tr(this,ce),t),t!==nn?`color(${t} ${ce.r} ${ce.g} ${ce.b})`:`rgb(${ce.r*255|0},${ce.g*255|0},${ce.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(Xe),Xe.h+=t,Xe.s+=e,Xe.l+=i,this.setHSL(Xe.h,Xe.s,Xe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Xe),t.getHSL(Er);const i=Vs(Xe.h,Er.h,e),o=Vs(Xe.s,Er.s,e),a=Vs(Xe.l,Er.l,e);return this.setHSL(i,o,a),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Kt.NAMES=$l;let li;class Kl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{li===void 0&&(li=Kr("canvas")),li.width=t.width,li.height=t.height;const i=li.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Kr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),a=o.data;for(let h=0;h<a.length;h++)a[h]=jn(a[h]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Yl{constructor(t=null){this.isSource=!0,this.uuid=lr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let h=0,u=o.length;h<u;h++)o[h].isDataTexture?a.push(Bs(o[h].image)):a.push(Bs(o[h]))}else a=Bs(o);i.url=a}return e||(t.images[this.uuid]=i),i}}function Bs(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Kl.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;class Ve extends Li{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,i=Ye,o=Ye,a=He,h=sr,u=Ze,p=$n,d=Ve.DEFAULT_ANISOTROPY,f=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=lr(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=h,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=p,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case Ye:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case Ye:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Wl;Ve.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,o=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*o+h[12]*a,this.y=h[1]*e+h[5]*i+h[9]*o+h[13]*a,this.z=h[2]*e+h[6]*i+h[10]*o+h[14]*a,this.w=h[3]*e+h[7]*i+h[11]*o+h[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,a;const p=t.elements,d=p[0],f=p[4],m=p[8],_=p[1],b=p[5],y=p[9],x=p[2],g=p[6],S=p[10];if(Math.abs(f-_)<.01&&Math.abs(m-x)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+_)<.1&&Math.abs(m+x)<.1&&Math.abs(y+g)<.1&&Math.abs(d+b+S-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(d+1)/2,L=(b+1)/2,P=(S+1)/2,N=(f+_)/4,F=(m+x)/4,w=(y+g)/4;return E>L&&E>P?E<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(E),o=N/i,a=F/i):L>P?L<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),i=N/o,a=w/o):P<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(P),i=F/a,o=w/a),this.set(i,o,a,e),this}let D=Math.sqrt((g-y)*(g-y)+(m-x)*(m-x)+(_-f)*(_-f));return Math.abs(D)<.001&&(D=1),this.x=(g-y)/D,this.y=(m-x)/D,this.z=(_-f)/D,this.w=Math.acos((d+b+S-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yn extends Li{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const o={width:t,height:e,depth:1};this.texture=new Ve(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:He,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zl extends Ve{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class up extends Ve{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=Ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,a,h,u){let p=i[o+0],d=i[o+1],f=i[o+2],m=i[o+3];const _=a[h+0],b=a[h+1],y=a[h+2],x=a[h+3];if(u===0){t[e+0]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m;return}if(u===1){t[e+0]=_,t[e+1]=b,t[e+2]=y,t[e+3]=x;return}if(m!==x||p!==_||d!==b||f!==y){let g=1-u;const S=p*_+d*b+f*y+m*x,D=S>=0?1:-1,E=1-S*S;if(E>Number.EPSILON){const P=Math.sqrt(E),N=Math.atan2(P,S*D);g=Math.sin(g*N)/P,u=Math.sin(u*N)/P}const L=u*D;if(p=p*g+_*L,d=d*g+b*L,f=f*g+y*L,m=m*g+x*L,g===1-u){const P=1/Math.sqrt(p*p+d*d+f*f+m*m);p*=P,d*=P,f*=P,m*=P}}t[e]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,o,a,h){const u=i[o],p=i[o+1],d=i[o+2],f=i[o+3],m=a[h],_=a[h+1],b=a[h+2],y=a[h+3];return t[e]=u*y+f*m+p*b-d*_,t[e+1]=p*y+f*_+d*m-u*b,t[e+2]=d*y+f*b+u*_-p*m,t[e+3]=f*y-u*m-p*_-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,o=t._y,a=t._z,h=t._order,u=Math.cos,p=Math.sin,d=u(i/2),f=u(o/2),m=u(a/2),_=p(i/2),b=p(o/2),y=p(a/2);switch(h){case"XYZ":this._x=_*f*m+d*b*y,this._y=d*b*m-_*f*y,this._z=d*f*y+_*b*m,this._w=d*f*m-_*b*y;break;case"YXZ":this._x=_*f*m+d*b*y,this._y=d*b*m-_*f*y,this._z=d*f*y-_*b*m,this._w=d*f*m+_*b*y;break;case"ZXY":this._x=_*f*m-d*b*y,this._y=d*b*m+_*f*y,this._z=d*f*y+_*b*m,this._w=d*f*m-_*b*y;break;case"ZYX":this._x=_*f*m-d*b*y,this._y=d*b*m+_*f*y,this._z=d*f*y-_*b*m,this._w=d*f*m+_*b*y;break;case"YZX":this._x=_*f*m+d*b*y,this._y=d*b*m+_*f*y,this._z=d*f*y-_*b*m,this._w=d*f*m-_*b*y;break;case"XZY":this._x=_*f*m-d*b*y,this._y=d*b*m-_*f*y,this._z=d*f*y+_*b*m,this._w=d*f*m+_*b*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],a=e[8],h=e[1],u=e[5],p=e[9],d=e[2],f=e[6],m=e[10],_=i+u+m;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(f-p)*b,this._y=(a-d)*b,this._z=(h-o)*b}else if(i>u&&i>m){const b=2*Math.sqrt(1+i-u-m);this._w=(f-p)/b,this._x=.25*b,this._y=(o+h)/b,this._z=(a+d)/b}else if(u>m){const b=2*Math.sqrt(1+u-i-m);this._w=(a-d)/b,this._x=(o+h)/b,this._y=.25*b,this._z=(p+f)/b}else{const b=2*Math.sqrt(1+m-i-u);this._w=(h-o)/b,this._x=(a+d)/b,this._y=(p+f)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,a=t._z,h=t._w,u=e._x,p=e._y,d=e._z,f=e._w;return this._x=i*f+h*u+o*d-a*p,this._y=o*f+h*p+a*u-i*d,this._z=a*f+h*d+i*p-o*u,this._w=h*f-i*u-o*p-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,a=this._z,h=this._w;let u=h*t._w+i*t._x+o*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=h,this._x=i,this._y=o,this._z=a,this;const p=1-u*u;if(p<=Number.EPSILON){const b=1-e;return this._w=b*h+e*this._w,this._x=b*i+e*this._x,this._y=b*o+e*this._y,this._z=b*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(p),f=Math.atan2(d,u),m=Math.sin((1-e)*f)/d,_=Math.sin(e*f)/d;return this._w=h*m+this._w*_,this._x=i*m+this._x*_,this._y=o*m+this._y*_,this._z=a*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(o),i*Math.sin(a),i*Math.cos(a),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*o,this.y=a[1]*e+a[4]*i+a[7]*o,this.z=a[2]*e+a[5]*i+a[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=t.elements,h=1/(a[3]*e+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*o+a[12])*h,this.y=(a[1]*e+a[5]*i+a[9]*o+a[13])*h,this.z=(a[2]*e+a[6]*i+a[10]*o+a[14])*h,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,a=t.x,h=t.y,u=t.z,p=t.w,d=p*e+h*o-u*i,f=p*i+u*e-a*o,m=p*o+a*i-h*e,_=-a*e-h*i-u*o;return this.x=d*p+_*-a+f*-u-m*-h,this.y=f*p+_*-h+m*-a-d*-u,this.z=m*p+_*-u+d*-h-f*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o,this.y=a[1]*e+a[5]*i+a[9]*o,this.z=a[2]*e+a[6]*i+a[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,a=t.z,h=e.x,u=e.y,p=e.z;return this.x=o*p-a*u,this.y=a*h-i*p,this.z=i*u-o*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gs.copy(this).projectOnVector(t),this.sub(Gs)}reflect(t){return this.sub(Gs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new G,al=new cr;class ur{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,o=1/0,a=-1/0,h=-1/0,u=-1/0;for(let p=0,d=t.length;p<d;p+=3){const f=t[p],m=t[p+1],_=t[p+2];f<e&&(e=f),m<i&&(i=m),_<o&&(o=_),f>a&&(a=f),m>h&&(h=m),_>u&&(u=_)}return this.min.set(e,i,o),this.max.set(a,h,u),this}setFromBufferAttribute(t){let e=1/0,i=1/0,o=1/0,a=-1/0,h=-1/0,u=-1/0;for(let p=0,d=t.count;p<d;p++){const f=t.getX(p),m=t.getY(p),_=t.getZ(p);f<e&&(e=f),m<i&&(i=m),_<o&&(o=_),f>a&&(a=f),m>h&&(h=m),_>u&&(u=_)}return this.min.set(e,i,o),this.max.set(a,h,u),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let h=0,u=a.count;h<u;h++)Vn.fromBufferAttribute(a,h).applyMatrix4(t.matrixWorld),this.expandByPoint(Vn)}else i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox),Hs.applyMatrix4(t.matrixWorld),this.union(Hs);const o=t.children;for(let a=0,h=o.length;a<h;a++)this.expandByObject(o[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),Pr.subVectors(this.max,Ki),ci.subVectors(t.a,Ki),ui.subVectors(t.b,Ki),hi.subVectors(t.c,Ki),En.subVectors(ui,ci),Tn.subVectors(hi,ui),Un.subVectors(ci,hi);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Un.z,Un.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Un.z,0,-Un.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Un.y,Un.x,0];return!Ws(e,ci,ui,hi,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Ws(e,ci,ui,hi,Pr))?!1:(Ar.crossVectors(En,Tn),e=[Ar.x,Ar.y,Ar.z],Ws(e,ci,ui,hi,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Vn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new G,new G,new G,new G,new G,new G,new G,new G],Vn=new G,Hs=new ur,ci=new G,ui=new G,hi=new G,En=new G,Tn=new G,Un=new G,Ki=new G,Pr=new G,Ar=new G,On=new G;function Ws(c,t,e,i,o){for(let a=0,h=c.length-3;a<=h;a+=3){On.fromArray(c,a);const u=o.x*Math.abs(On.x)+o.y*Math.abs(On.y)+o.z*Math.abs(On.z),p=t.dot(On),d=e.dot(On),f=i.dot(On);if(Math.max(-Math.max(p,d,f),Math.min(p,d,f))>u)return!1}return!0}const hp=new ur,Yi=new G,qs=new G;class yo{constructor(t=new G,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):hp.setFromPoints(t).getCenter(i);let o=0;for(let a=0,h=t.length;a<h;a++)o=Math.max(o,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(Yi,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(qs)),this.expandByPoint(Yi.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new G,js=new G,Lr=new G,Pn=new G,Xs=new G,Dr=new G,$s=new G;class dp{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.direction).multiplyScalar(e).add(this.origin),pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){js.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(js);const a=t.distanceTo(e)*.5,h=-this.direction.dot(Lr),u=Pn.dot(this.direction),p=-Pn.dot(Lr),d=Pn.lengthSq(),f=Math.abs(1-h*h);let m,_,b,y;if(f>0)if(m=h*p-u,_=h*u-p,y=a*f,m>=0)if(_>=-y)if(_<=y){const x=1/f;m*=x,_*=x,b=m*(m+h*_+2*u)+_*(h*m+_+2*p)+d}else _=a,m=Math.max(0,-(h*_+u)),b=-m*m+_*(_+2*p)+d;else _=-a,m=Math.max(0,-(h*_+u)),b=-m*m+_*(_+2*p)+d;else _<=-y?(m=Math.max(0,-(-h*a+u)),_=m>0?-a:Math.min(Math.max(-a,-p),a),b=-m*m+_*(_+2*p)+d):_<=y?(m=0,_=Math.min(Math.max(-a,-p),a),b=_*(_+2*p)+d):(m=Math.max(0,-(h*a+u)),_=m>0?a:Math.min(Math.max(-a,-p),a),b=-m*m+_*(_+2*p)+d);else _=h>0?-a:a,m=Math.max(0,-(h*_+u)),b=-m*m+_*(_+2*p)+d;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),o&&o.copy(Lr).multiplyScalar(_).add(js),b}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const i=pn.dot(this.direction),o=pn.dot(pn)-i*i,a=t.radius*t.radius;if(o>a)return null;const h=Math.sqrt(a-o),u=i-h,p=i+h;return u<0&&p<0?null:u<0?this.at(p,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,a,h,u,p;const d=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),f>=0?(a=(t.min.y-_.y)*f,h=(t.max.y-_.y)*f):(a=(t.max.y-_.y)*f,h=(t.min.y-_.y)*f),i>h||a>o||((a>i||isNaN(i))&&(i=a),(h<o||isNaN(o))&&(o=h),m>=0?(u=(t.min.z-_.z)*m,p=(t.max.z-_.z)*m):(u=(t.max.z-_.z)*m,p=(t.min.z-_.z)*m),i>p||u>o)||((u>i||i!==i)&&(i=u),(p<o||o!==o)&&(o=p),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,i,o,a){Xs.subVectors(e,t),Dr.subVectors(i,t),$s.crossVectors(Xs,Dr);let h=this.direction.dot($s),u;if(h>0){if(o)return null;u=1}else if(h<0)u=-1,h=-h;else return null;Pn.subVectors(this.origin,t);const p=u*this.direction.dot(Dr.crossVectors(Pn,Dr));if(p<0)return null;const d=u*this.direction.dot(Xs.cross(Pn));if(d<0||p+d>h)return null;const f=-u*Pn.dot($s);return f<0?null:this.at(f/h,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,o,a,h,u,p,d,f,m,_,b,y,x,g){const S=this.elements;return S[0]=t,S[4]=e,S[8]=i,S[12]=o,S[1]=a,S[5]=h,S[9]=u,S[13]=p,S[2]=d,S[6]=f,S[10]=m,S[14]=_,S[3]=b,S[7]=y,S[11]=x,S[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/di.setFromMatrixColumn(t,0).length(),a=1/di.setFromMatrixColumn(t,1).length(),h=1/di.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,a=t.z,h=Math.cos(i),u=Math.sin(i),p=Math.cos(o),d=Math.sin(o),f=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const _=h*f,b=h*m,y=u*f,x=u*m;e[0]=p*f,e[4]=-p*m,e[8]=d,e[1]=b+y*d,e[5]=_-x*d,e[9]=-u*p,e[2]=x-_*d,e[6]=y+b*d,e[10]=h*p}else if(t.order==="YXZ"){const _=p*f,b=p*m,y=d*f,x=d*m;e[0]=_+x*u,e[4]=y*u-b,e[8]=h*d,e[1]=h*m,e[5]=h*f,e[9]=-u,e[2]=b*u-y,e[6]=x+_*u,e[10]=h*p}else if(t.order==="ZXY"){const _=p*f,b=p*m,y=d*f,x=d*m;e[0]=_-x*u,e[4]=-h*m,e[8]=y+b*u,e[1]=b+y*u,e[5]=h*f,e[9]=x-_*u,e[2]=-h*d,e[6]=u,e[10]=h*p}else if(t.order==="ZYX"){const _=h*f,b=h*m,y=u*f,x=u*m;e[0]=p*f,e[4]=y*d-b,e[8]=_*d+x,e[1]=p*m,e[5]=x*d+_,e[9]=b*d-y,e[2]=-d,e[6]=u*p,e[10]=h*p}else if(t.order==="YZX"){const _=h*p,b=h*d,y=u*p,x=u*d;e[0]=p*f,e[4]=x-_*m,e[8]=y*m+b,e[1]=m,e[5]=h*f,e[9]=-u*f,e[2]=-d*f,e[6]=b*m+y,e[10]=_-x*m}else if(t.order==="XZY"){const _=h*p,b=h*d,y=u*p,x=u*d;e[0]=p*f,e[4]=-m,e[8]=d*f,e[1]=_*m+x,e[5]=h*f,e[9]=b*m-y,e[2]=y*m-b,e[6]=u*f,e[10]=x*m+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pp,t,fp)}lookAt(t,e,i){const o=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),An.crossVectors(i,Ie),An.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),An.crossVectors(i,Ie)),An.normalize(),Rr.crossVectors(Ie,An),o[0]=An.x,o[4]=Rr.x,o[8]=Ie.x,o[1]=An.y,o[5]=Rr.y,o[9]=Ie.y,o[2]=An.z,o[6]=Rr.z,o[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,h=i[0],u=i[4],p=i[8],d=i[12],f=i[1],m=i[5],_=i[9],b=i[13],y=i[2],x=i[6],g=i[10],S=i[14],D=i[3],E=i[7],L=i[11],P=i[15],N=o[0],F=o[4],w=o[8],R=o[12],O=o[1],Y=o[5],rt=o[9],z=o[13],V=o[2],Z=o[6],nt=o[10],W=o[14],et=o[3],ct=o[7],at=o[11],H=o[15];return a[0]=h*N+u*O+p*V+d*et,a[4]=h*F+u*Y+p*Z+d*ct,a[8]=h*w+u*rt+p*nt+d*at,a[12]=h*R+u*z+p*W+d*H,a[1]=f*N+m*O+_*V+b*et,a[5]=f*F+m*Y+_*Z+b*ct,a[9]=f*w+m*rt+_*nt+b*at,a[13]=f*R+m*z+_*W+b*H,a[2]=y*N+x*O+g*V+S*et,a[6]=y*F+x*Y+g*Z+S*ct,a[10]=y*w+x*rt+g*nt+S*at,a[14]=y*R+x*z+g*W+S*H,a[3]=D*N+E*O+L*V+P*et,a[7]=D*F+E*Y+L*Z+P*ct,a[11]=D*w+E*rt+L*nt+P*at,a[15]=D*R+E*z+L*W+P*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],a=t[12],h=t[1],u=t[5],p=t[9],d=t[13],f=t[2],m=t[6],_=t[10],b=t[14],y=t[3],x=t[7],g=t[11],S=t[15];return y*(+a*p*m-o*d*m-a*u*_+i*d*_+o*u*b-i*p*b)+x*(+e*p*b-e*d*_+a*h*_-o*h*b+o*d*f-a*p*f)+g*(+e*d*m-e*u*b-a*h*m+i*h*b+a*u*f-i*d*f)+S*(-o*u*f-e*p*m+e*u*_+o*h*m-i*h*_+i*p*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],u=t[5],p=t[6],d=t[7],f=t[8],m=t[9],_=t[10],b=t[11],y=t[12],x=t[13],g=t[14],S=t[15],D=m*g*d-x*_*d+x*p*b-u*g*b-m*p*S+u*_*S,E=y*_*d-f*g*d-y*p*b+h*g*b+f*p*S-h*_*S,L=f*x*d-y*m*d+y*u*b-h*x*b-f*u*S+h*m*S,P=y*m*p-f*x*p-y*u*_+h*x*_+f*u*g-h*m*g,N=e*D+i*E+o*L+a*P;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return t[0]=D*F,t[1]=(x*_*a-m*g*a-x*o*b+i*g*b+m*o*S-i*_*S)*F,t[2]=(u*g*a-x*p*a+x*o*d-i*g*d-u*o*S+i*p*S)*F,t[3]=(m*p*a-u*_*a-m*o*d+i*_*d+u*o*b-i*p*b)*F,t[4]=E*F,t[5]=(f*g*a-y*_*a+y*o*b-e*g*b-f*o*S+e*_*S)*F,t[6]=(y*p*a-h*g*a-y*o*d+e*g*d+h*o*S-e*p*S)*F,t[7]=(h*_*a-f*p*a+f*o*d-e*_*d-h*o*b+e*p*b)*F,t[8]=L*F,t[9]=(y*m*a-f*x*a-y*i*b+e*x*b+f*i*S-e*m*S)*F,t[10]=(h*x*a-y*u*a+y*i*d-e*x*d-h*i*S+e*u*S)*F,t[11]=(f*u*a-h*m*a-f*i*d+e*m*d+h*i*b-e*u*b)*F,t[12]=P*F,t[13]=(f*x*o-y*m*o+y*i*_-e*x*_-f*i*g+e*m*g)*F,t[14]=(y*u*o-h*x*o-y*i*p+e*x*p+h*i*g-e*u*g)*F,t[15]=(h*m*o-f*u*o+f*i*p-e*m*p-h*i*_+e*u*_)*F,this}scale(t){const e=this.elements,i=t.x,o=t.y,a=t.z;return e[0]*=i,e[4]*=o,e[8]*=a,e[1]*=i,e[5]*=o,e[9]*=a,e[2]*=i,e[6]*=o,e[10]*=a,e[3]*=i,e[7]*=o,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),a=1-i,h=t.x,u=t.y,p=t.z,d=a*h,f=a*u;return this.set(d*h+i,d*u-o*p,d*p+o*u,0,d*u+o*p,f*u+i,f*p-o*h,0,d*p-o*u,f*p+o*h,a*p*p+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,a,h){return this.set(1,i,a,0,t,1,h,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,a=e._x,h=e._y,u=e._z,p=e._w,d=a+a,f=h+h,m=u+u,_=a*d,b=a*f,y=a*m,x=h*f,g=h*m,S=u*m,D=p*d,E=p*f,L=p*m,P=i.x,N=i.y,F=i.z;return o[0]=(1-(x+S))*P,o[1]=(b+L)*P,o[2]=(y-E)*P,o[3]=0,o[4]=(b-L)*N,o[5]=(1-(_+S))*N,o[6]=(g+D)*N,o[7]=0,o[8]=(y+E)*F,o[9]=(g-D)*F,o[10]=(1-(_+x))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let a=di.set(o[0],o[1],o[2]).length();const h=di.set(o[4],o[5],o[6]).length(),u=di.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),t.x=o[12],t.y=o[13],t.z=o[14],$e.copy(this);const d=1/a,f=1/h,m=1/u;return $e.elements[0]*=d,$e.elements[1]*=d,$e.elements[2]*=d,$e.elements[4]*=f,$e.elements[5]*=f,$e.elements[6]*=f,$e.elements[8]*=m,$e.elements[9]*=m,$e.elements[10]*=m,e.setFromRotationMatrix($e),i.x=a,i.y=h,i.z=u,this}makePerspective(t,e,i,o,a,h){const u=this.elements,p=2*a/(e-t),d=2*a/(i-o),f=(e+t)/(e-t),m=(i+o)/(i-o),_=-(h+a)/(h-a),b=-2*h*a/(h-a);return u[0]=p,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,i,o,a,h){const u=this.elements,p=1/(e-t),d=1/(i-o),f=1/(h-a),m=(e+t)*p,_=(i+o)*d,b=(h+a)*f;return u[0]=2*p,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-_,u[2]=0,u[6]=0,u[10]=-2*f,u[14]=-b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const di=new G,$e=new xe,pp=new G(0,0,0),fp=new G(1,1,1),An=new G,Rr=new G,Ie=new G,ll=new xe,cl=new cr;class hr{constructor(t=0,e=0,i=0,o=hr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,a=o[0],h=o[4],u=o[8],p=o[1],d=o[5],f=o[9],m=o[2],_=o[6],b=o[10];switch(e){case"XYZ":this._y=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,b),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(u,b),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(ke(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,b),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,b));break;case"XZY":this._z=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-f,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ll,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cl.setFromEuler(this),this.setFromQuaternion(cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}hr.DefaultOrder="XYZ";hr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mp=0;const ul=new G,pi=new cr,fn=new xe,Ir=new G,Zi=new G,gp=new G,_p=new cr,hl=new G(1,0,0),dl=new G(0,1,0),pl=new G(0,0,1),vp={type:"added"},fl={type:"removed"};class Te extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DefaultUp.clone();const t=new G,e=new hr,i=new cr,o=new G(1,1,1);function a(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xe},normalMatrix:{value:new Fe}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Te.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Te.DefaultMatrixWorldAutoUpdate,this.layers=new Jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(hl,t)}rotateY(t){return this.rotateOnAxis(dl,t)}rotateZ(t){return this.rotateOnAxis(pl,t)}translateOnAxis(t,e){return ul.copy(t).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hl,t)}translateY(t){return this.translateOnAxis(dl,t)}translateZ(t){return this.translateOnAxis(pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ir.copy(t):Ir.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Zi,Ir,this.up):fn.lookAt(Ir,Zi,this.up),this.quaternion.setFromRotationMatrix(fn),o&&(fn.extractRotation(o.matrixWorld),pi.setFromRotationMatrix(fn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(fl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let o=0,a=this.children.length;o<a;o++){const h=this.children[o].getObjectsByProperty(t,e);h.length>0&&(i=i.concat(h))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let a=0,h=o.length;a<h;a++){const u=o[a];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(u,p){return u[p.uuid]===void 0&&(u[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const p=u.shapes;if(Array.isArray(p))for(let d=0,f=p.length;d<f;d++){const m=p[d];a(t.shapes,m)}else a(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let p=0,d=this.material.length;p<d;p++)u.push(a(t.materials,this.material[p]));o.material=u}else o.material=a(t.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const p=this.animations[u];o.animations.push(a(t.animations,p))}}if(e){const u=h(t.geometries),p=h(t.materials),d=h(t.textures),f=h(t.images),m=h(t.shapes),_=h(t.skeletons),b=h(t.animations),y=h(t.nodes);u.length>0&&(i.geometries=u),p.length>0&&(i.materials=p),d.length>0&&(i.textures=d),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),_.length>0&&(i.skeletons=_),b.length>0&&(i.animations=b),y.length>0&&(i.nodes=y)}return i.object=o,i;function h(u){const p=[];for(const d in u){const f=u[d];delete f.metadata,p.push(f)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}Te.DefaultUp=new G(0,1,0);Te.DefaultMatrixAutoUpdate=!0;Te.DefaultMatrixWorldAutoUpdate=!0;const Ke=new G,mn=new G,Ks=new G,gn=new G,fi=new G,mi=new G,ml=new G,Ys=new G,Zs=new G,Js=new G;class _n{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),Ke.subVectors(t,e),o.cross(Ke);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(t,e,i,o,a){Ke.subVectors(o,e),mn.subVectors(i,e),Ks.subVectors(t,e);const h=Ke.dot(Ke),u=Ke.dot(mn),p=Ke.dot(Ks),d=mn.dot(mn),f=mn.dot(Ks),m=h*d-u*u;if(m===0)return a.set(-2,-1,-1);const _=1/m,b=(d*p-u*f)*_,y=(h*f-u*p)*_;return a.set(1-b-y,y,b)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(t,e,i,o,a,h,u,p){return this.getBarycoord(t,e,i,o,gn),p.set(0,0),p.addScaledVector(a,gn.x),p.addScaledVector(h,gn.y),p.addScaledVector(u,gn.z),p}static isFrontFacing(t,e,i,o){return Ke.subVectors(i,e),mn.subVectors(t,e),Ke.cross(mn).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Ke.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,o,a){return _n.getUV(t,this.a,this.b,this.c,e,i,o,a)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,a=this.c;let h,u;fi.subVectors(o,i),mi.subVectors(a,i),Ys.subVectors(t,i);const p=fi.dot(Ys),d=mi.dot(Ys);if(p<=0&&d<=0)return e.copy(i);Zs.subVectors(t,o);const f=fi.dot(Zs),m=mi.dot(Zs);if(f>=0&&m<=f)return e.copy(o);const _=p*m-f*d;if(_<=0&&p>=0&&f<=0)return h=p/(p-f),e.copy(i).addScaledVector(fi,h);Js.subVectors(t,a);const b=fi.dot(Js),y=mi.dot(Js);if(y>=0&&b<=y)return e.copy(a);const x=b*d-p*y;if(x<=0&&d>=0&&y<=0)return u=d/(d-y),e.copy(i).addScaledVector(mi,u);const g=f*y-b*m;if(g<=0&&m-f>=0&&b-y>=0)return ml.subVectors(a,o),u=(m-f)/(m-f+(b-y)),e.copy(o).addScaledVector(ml,u);const S=1/(g+x+_);return h=x*S,u=_*S,e.copy(i).addScaledVector(fi,h).addScaledVector(mi,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let xp=0;class dr extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Si,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Bl,this.blendDst=Gl,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const o=this[e];if(o===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const h=[];for(const u in a){const p=a[u];delete p.metadata,h.push(p)}return h}if(e){const a=o(t.textures),h=o(t.images);a.length>0&&(i.textures=a),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ql extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new G,Nr=new Yt;class on{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=il,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),o=Re(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),i=Re(i,this.array),o=Re(o,this.array),a=Re(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class tc extends on{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ec extends on{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class an extends on{constructor(t,e,i){super(new Float32Array(t),e,i)}}let bp=0;const Ge=new xe,Qs=new Te,gi=new G,Ne=new ur,Ji=new ur,de=new G;class Dn extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xl(t)?ec:tc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Fe().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=[];for(let i=0,o=t.length;i<o;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new an(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const a=e[i];Ne.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let a=0,h=e.length;a<h;a++){const u=e[a];Ji.setFromBufferAttribute(u),this.morphTargetsRelative?(de.addVectors(Ne.min,Ji.min),Ne.expandByPoint(de),de.addVectors(Ne.max,Ji.max),Ne.expandByPoint(de)):(Ne.expandByPoint(Ji.min),Ne.expandByPoint(Ji.max))}Ne.getCenter(i);let o=0;for(let a=0,h=t.count;a<h;a++)de.fromBufferAttribute(t,a),o=Math.max(o,i.distanceToSquared(de));if(e)for(let a=0,h=e.length;a<h;a++){const u=e[a],p=this.morphTargetsRelative;for(let d=0,f=u.count;d<f;d++)de.fromBufferAttribute(u,d),p&&(gi.fromBufferAttribute(t,d),de.add(gi)),o=Math.max(o,i.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,o=e.position.array,a=e.normal.array,h=e.uv.array,u=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*u),4));const p=this.getAttribute("tangent").array,d=[],f=[];for(let O=0;O<u;O++)d[O]=new G,f[O]=new G;const m=new G,_=new G,b=new G,y=new Yt,x=new Yt,g=new Yt,S=new G,D=new G;function E(O,Y,rt){m.fromArray(o,O*3),_.fromArray(o,Y*3),b.fromArray(o,rt*3),y.fromArray(h,O*2),x.fromArray(h,Y*2),g.fromArray(h,rt*2),_.sub(m),b.sub(m),x.sub(y),g.sub(y);const z=1/(x.x*g.y-g.x*x.y);isFinite(z)&&(S.copy(_).multiplyScalar(g.y).addScaledVector(b,-x.y).multiplyScalar(z),D.copy(b).multiplyScalar(x.x).addScaledVector(_,-g.x).multiplyScalar(z),d[O].add(S),d[Y].add(S),d[rt].add(S),f[O].add(D),f[Y].add(D),f[rt].add(D))}let L=this.groups;L.length===0&&(L=[{start:0,count:i.length}]);for(let O=0,Y=L.length;O<Y;++O){const rt=L[O],z=rt.start,V=rt.count;for(let Z=z,nt=z+V;Z<nt;Z+=3)E(i[Z+0],i[Z+1],i[Z+2])}const P=new G,N=new G,F=new G,w=new G;function R(O){F.fromArray(a,O*3),w.copy(F);const Y=d[O];P.copy(Y),P.sub(F.multiplyScalar(F.dot(Y))).normalize(),N.crossVectors(w,Y);const z=N.dot(f[O])<0?-1:1;p[O*4]=P.x,p[O*4+1]=P.y,p[O*4+2]=P.z,p[O*4+3]=z}for(let O=0,Y=L.length;O<Y;++O){const rt=L[O],z=rt.start,V=rt.count;for(let Z=z,nt=z+V;Z<nt;Z+=3)R(i[Z+0]),R(i[Z+1]),R(i[Z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,b=i.count;_<b;_++)i.setXYZ(_,0,0,0);const o=new G,a=new G,h=new G,u=new G,p=new G,d=new G,f=new G,m=new G;if(t)for(let _=0,b=t.count;_<b;_+=3){const y=t.getX(_+0),x=t.getX(_+1),g=t.getX(_+2);o.fromBufferAttribute(e,y),a.fromBufferAttribute(e,x),h.fromBufferAttribute(e,g),f.subVectors(h,a),m.subVectors(o,a),f.cross(m),u.fromBufferAttribute(i,y),p.fromBufferAttribute(i,x),d.fromBufferAttribute(i,g),u.add(f),p.add(f),d.add(f),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(x,p.x,p.y,p.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let _=0,b=e.count;_<b;_+=3)o.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),h.fromBufferAttribute(e,_+2),f.subVectors(h,a),m.subVectors(o,a),f.cross(m),i.setXYZ(_+0,f.x,f.y,f.z),i.setXYZ(_+1,f.x,f.y,f.z),i.setXYZ(_+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(u,p){const d=u.array,f=u.itemSize,m=u.normalized,_=new d.constructor(p.length*f);let b=0,y=0;for(let x=0,g=p.length;x<g;x++){u.isInterleavedBufferAttribute?b=p[x]*u.data.stride+u.offset:b=p[x]*f;for(let S=0;S<f;S++)_[y++]=d[b++]}return new on(_,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Dn,i=this.index.array,o=this.attributes;for(const u in o){const p=o[u],d=t(p,i);e.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const p=[],d=a[u];for(let f=0,m=d.length;f<m;f++){const _=d[f],b=t(_,i);p.push(b)}e.morphAttributes[u]=p}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let u=0,p=h.length;u<p;u++){const d=h[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const p in i){const d=i[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let a=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],f=[];for(let m=0,_=d.length;m<_;m++){const b=d[m];f.push(b.toJSON(t.data))}f.length>0&&(o[p]=f,a=!0)}a&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const d in o){const f=o[d];this.setAttribute(d,f.clone(e))}const a=t.morphAttributes;for(const d in a){const f=[],m=a[d];for(let _=0,b=m.length;_<b;_++)f.push(m[_].clone(e));this.morphAttributes[d]=f}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,f=h.length;d<f;d++){const m=h[d];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new xe,_i=new dp,to=new yo,Qi=new G,tr=new G,er=new G,eo=new G,kr=new G,Fr=new Yt,Vr=new Yt,Ur=new Yt,no=new G,Or=new G;class sn extends Te{constructor(t=new Dn,e=new Ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=o.length;a<h;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,h=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const u=this.morphTargetInfluences;if(a&&u){kr.set(0,0,0);for(let p=0,d=a.length;p<d;p++){const f=u[p],m=a[p];f!==0&&(eo.fromBufferAttribute(m,t),h?kr.addScaledVector(eo,f):kr.addScaledVector(eo.sub(e),f))}e.add(kr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const i=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(a),t.ray.intersectsSphere(to)===!1)||(gl.copy(a).invert(),_i.copy(t.ray).applyMatrix4(gl),i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1))return;let h;const u=i.index,p=i.attributes.position,d=i.attributes.uv,f=i.attributes.uv2,m=i.groups,_=i.drawRange;if(u!==null)if(Array.isArray(o))for(let b=0,y=m.length;b<y;b++){const x=m[b],g=o[x.materialIndex],S=Math.max(x.start,_.start),D=Math.min(u.count,Math.min(x.start+x.count,_.start+_.count));for(let E=S,L=D;E<L;E+=3){const P=u.getX(E),N=u.getX(E+1),F=u.getX(E+2);h=zr(this,g,t,_i,d,f,P,N,F),h&&(h.faceIndex=Math.floor(E/3),h.face.materialIndex=x.materialIndex,e.push(h))}}else{const b=Math.max(0,_.start),y=Math.min(u.count,_.start+_.count);for(let x=b,g=y;x<g;x+=3){const S=u.getX(x),D=u.getX(x+1),E=u.getX(x+2);h=zr(this,o,t,_i,d,f,S,D,E),h&&(h.faceIndex=Math.floor(x/3),e.push(h))}}else if(p!==void 0)if(Array.isArray(o))for(let b=0,y=m.length;b<y;b++){const x=m[b],g=o[x.materialIndex],S=Math.max(x.start,_.start),D=Math.min(p.count,Math.min(x.start+x.count,_.start+_.count));for(let E=S,L=D;E<L;E+=3){const P=E,N=E+1,F=E+2;h=zr(this,g,t,_i,d,f,P,N,F),h&&(h.faceIndex=Math.floor(E/3),h.face.materialIndex=x.materialIndex,e.push(h))}}else{const b=Math.max(0,_.start),y=Math.min(p.count,_.start+_.count);for(let x=b,g=y;x<g;x+=3){const S=x,D=x+1,E=x+2;h=zr(this,o,t,_i,d,f,S,D,E),h&&(h.faceIndex=Math.floor(x/3),e.push(h))}}}}function wp(c,t,e,i,o,a,h,u){let p;if(t.side===qe?p=i.intersectTriangle(h,a,o,!0,u):p=i.intersectTriangle(o,a,h,t.side===Xn,u),p===null)return null;Or.copy(u),Or.applyMatrix4(c.matrixWorld);const d=e.ray.origin.distanceTo(Or);return d<e.near||d>e.far?null:{distance:d,point:Or.clone(),object:c}}function zr(c,t,e,i,o,a,h,u,p){c.getVertexPosition(h,Qi),c.getVertexPosition(u,tr),c.getVertexPosition(p,er);const d=wp(c,t,e,i,Qi,tr,er,no);if(d){o&&(Fr.fromBufferAttribute(o,h),Vr.fromBufferAttribute(o,u),Ur.fromBufferAttribute(o,p),d.uv=_n.getUV(no,Qi,tr,er,Fr,Vr,Ur,new Yt)),a&&(Fr.fromBufferAttribute(a,h),Vr.fromBufferAttribute(a,u),Ur.fromBufferAttribute(a,p),d.uv2=_n.getUV(no,Qi,tr,er,Fr,Vr,Ur,new Yt));const f={a:h,b:u,c:p,normal:new G,materialIndex:0};_n.getNormal(Qi,tr,er,f.normal),d.face=f}return d}class Di extends Dn{constructor(t=1,e=1,i=1,o=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:a,depthSegments:h};const u=this;o=Math.floor(o),a=Math.floor(a),h=Math.floor(h);const p=[],d=[],f=[],m=[];let _=0,b=0;y("z","y","x",-1,-1,i,e,t,h,a,0),y("z","y","x",1,-1,i,e,-t,h,a,1),y("x","z","y",1,1,t,i,e,o,h,2),y("x","z","y",1,-1,t,i,-e,o,h,3),y("x","y","z",1,-1,t,e,i,o,a,4),y("x","y","z",-1,-1,t,e,-i,o,a,5),this.setIndex(p),this.setAttribute("position",new an(d,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(m,2));function y(x,g,S,D,E,L,P,N,F,w,R){const O=L/F,Y=P/w,rt=L/2,z=P/2,V=N/2,Z=F+1,nt=w+1;let W=0,et=0;const ct=new G;for(let at=0;at<nt;at++){const H=at*Y-z;for(let $=0;$<Z;$++){const tt=$*O-rt;ct[x]=tt*D,ct[g]=H*E,ct[S]=V,d.push(ct.x,ct.y,ct.z),ct[x]=0,ct[g]=0,ct[S]=N>0?1:-1,f.push(ct.x,ct.y,ct.z),m.push($/F),m.push(1-at/w),W+=1}}for(let at=0;at<w;at++)for(let H=0;H<F;H++){const $=_+H+Z*at,tt=_+H+Z*(at+1),it=_+(H+1)+Z*(at+1),mt=_+(H+1)+Z*at;p.push($,tt,mt),p.push(tt,it,mt),et+=6}u.addGroup(b,et,R),b+=et,_+=W}}static fromJSON(t){return new Di(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ai(c){const t={};for(const e in c){t[e]={};for(const i in c[e]){const o=c[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function Ce(c){const t={};for(let e=0;e<c.length;e++){const i=Ai(c[e]);for(const o in i)t[o]=i[o]}return t}function yp(c){const t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}function nc(c){return c.getRenderTarget()===null&&c.outputEncoding===Qt?nn:ar}const Mp={clone:Ai,merge:Ce};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?e.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[o]={type:"m4",value:h.toArray()}:e.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ic extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class We extends ic{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,o,a,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,a=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,d=h.fullHeight;a+=h.offsetX*o/p,e-=h.offsetY*i/d,o*=h.width/p,i*=h.height/d}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,xi=1;class Ep extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const o=new We(vi,xi,t,e);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const a=new We(vi,xi,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const h=new We(vi,xi,t,e);h.layers=this.layers,h.up.set(0,0,-1),h.lookAt(0,1,0),this.add(h);const u=new We(vi,xi,t,e);u.layers=this.layers,u.up.set(0,0,1),u.lookAt(0,-1,0),this.add(u);const p=new We(vi,xi,t,e);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,1),this.add(p);const d=new We(vi,xi,t,e);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,-1),this.add(d)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[o,a,h,u,p,d]=this.children,f=t.getRenderTarget(),m=t.toneMapping,_=t.xr.enabled;t.toneMapping=vn,t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,o),t.setRenderTarget(i,1),t.render(e,a),t.setRenderTarget(i,2),t.render(e,h),t.setRenderTarget(i,3),t.render(e,u),t.setRenderTarget(i,4),t.render(e,p),i.texture.generateMipmaps=b,t.setRenderTarget(i,5),t.render(e,d),t.setRenderTarget(f),t.toneMapping=m,t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rc extends Ve{constructor(t,e,i,o,a,h,u,p,d,f){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,i,o,a,h,u,p,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tp extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new rc(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Di(5,5,5),a=new Zn({name:"CubemapFromEquirect",uniforms:Ai(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Ln});a.uniforms.tEquirect.value=e;const h=new sn(o,a),u=e.minFilter;return e.minFilter===sr&&(e.minFilter=He),new Ep(1,10,this).update(t,h),e.minFilter=u,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,o){const a=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,o);t.setRenderTarget(a)}}const io=new G,Pp=new G,Ap=new Fe;class zn{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=io.subVectors(i,e).cross(Pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(io),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:e.copy(i).multiplyScalar(a).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ap.getNormalMatrix(t),o=this.coplanarPoint(io).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new yo,Br=new G;class sc{constructor(t=new zn,e=new zn,i=new zn,o=new zn,a=new zn,h=new zn){this.planes=[t,e,i,o,a,h]}set(t,e,i,o,a,h){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(h),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,o=i[0],a=i[1],h=i[2],u=i[3],p=i[4],d=i[5],f=i[6],m=i[7],_=i[8],b=i[9],y=i[10],x=i[11],g=i[12],S=i[13],D=i[14],E=i[15];return e[0].setComponents(u-o,m-p,x-_,E-g).normalize(),e[1].setComponents(u+o,m+p,x+_,E+g).normalize(),e[2].setComponents(u+a,m+d,x+b,E+S).normalize(),e[3].setComponents(u-a,m-d,x-b,E-S).normalize(),e[4].setComponents(u-h,m-f,x-y,E-D).normalize(),e[5].setComponents(u+h,m+f,x+y,E+D).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(Br.x=o.normal.x>0?t.max.x:t.min.x,Br.y=o.normal.y>0?t.max.y:t.min.y,Br.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let c=null,t=!1,e=null,i=null;function o(a,h){e(a,h),i=c.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=c.requestAnimationFrame(o),t=!0)},stop:function(){c.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){c=a}}}function Lp(c,t){const e=t.isWebGL2,i=new WeakMap;function o(d,f){const m=d.array,_=d.usage,b=c.createBuffer();c.bindBuffer(f,b),c.bufferData(f,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=5126;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(m instanceof Int16Array)y=5122;else if(m instanceof Uint32Array)y=5125;else if(m instanceof Int32Array)y=5124;else if(m instanceof Int8Array)y=5120;else if(m instanceof Uint8Array)y=5121;else if(m instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version}}function a(d,f,m){const _=f.array,b=f.updateRange;c.bindBuffer(m,d),b.count===-1?c.bufferSubData(m,0,_):(e?c.bufferSubData(m,b.offset*_.BYTES_PER_ELEMENT,_,b.offset,b.count):c.bufferSubData(m,b.offset*_.BYTES_PER_ELEMENT,_.subarray(b.offset,b.offset+b.count)),b.count=-1),f.onUploadCallback()}function h(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=i.get(d);f&&(c.deleteBuffer(f.buffer),i.delete(d))}function p(d,f){if(d.isGLBufferAttribute){const _=i.get(d);(!_||_.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=i.get(d);m===void 0?i.set(d,o(d,f)):m.version<d.version&&(a(m.buffer,d,f),m.version=d.version)}return{get:h,remove:u,update:p}}class Mo extends Dn{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const a=t/2,h=e/2,u=Math.floor(i),p=Math.floor(o),d=u+1,f=p+1,m=t/u,_=e/p,b=[],y=[],x=[],g=[];for(let S=0;S<f;S++){const D=S*_-h;for(let E=0;E<d;E++){const L=E*m-a;y.push(L,-D,0),x.push(0,0,1),g.push(E/u),g.push(1-S/p)}}for(let S=0;S<p;S++)for(let D=0;D<u;D++){const E=D+d*S,L=D+d*(S+1),P=D+1+d*(S+1),N=D+1+d*S;b.push(E,L,N),b.push(L,P,N)}this.setIndex(b),this.setAttribute("position",new an(y,3)),this.setAttribute("normal",new an(x,3)),this.setAttribute("uv",new an(g,2))}static fromJSON(t){return new Mo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp="vec3 transformed = vec3( position );",Up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,zp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,jf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Mm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Sm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Em=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Tm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,og=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ft={alphamap_fragment:Dp,alphamap_pars_fragment:Rp,alphatest_fragment:Ip,alphatest_pars_fragment:Np,aomap_fragment:kp,aomap_pars_fragment:Fp,begin_vertex:Vp,beginnormal_vertex:Up,bsdfs:Op,iridescence_fragment:zp,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:qp,color_fragment:jp,color_pars_fragment:Xp,color_pars_vertex:$p,color_vertex:Kp,common:Yp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:tf,emissivemap_fragment:ef,emissivemap_pars_fragment:nf,encodings_fragment:rf,encodings_pars_fragment:sf,envmap_fragment:of,envmap_common_pars_fragment:af,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:wf,envmap_vertex:uf,fog_vertex:hf,fog_pars_vertex:df,fog_fragment:pf,fog_pars_fragment:ff,gradientmap_pars_fragment:mf,lightmap_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:bf,lights_toon_fragment:yf,lights_toon_pars_fragment:Mf,lights_phong_fragment:Sf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Ef,lights_physical_pars_fragment:Tf,lights_fragment_begin:Pf,lights_fragment_maps:Af,lights_fragment_end:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Nf,map_fragment:kf,map_pars_fragment:Ff,map_particle_fragment:Vf,map_particle_pars_fragment:Uf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:zf,morphcolor_vertex:Bf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Wf,normal_fragment_begin:qf,normal_fragment_maps:jf,normal_pars_fragment:Xf,normal_pars_vertex:$f,normal_vertex:Kf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:tm,output_fragment:em,packing:nm,premultiplied_alpha_fragment:im,project_vertex:rm,dithering_fragment:sm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:um,shadowmap_vertex:hm,shadowmask_pars_fragment:dm,skinbase_vertex:pm,skinning_pars_vertex:fm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:xm,tonemapping_pars_fragment:bm,transmission_fragment:wm,transmission_pars_fragment:ym,uv_pars_fragment:Mm,uv_pars_vertex:Sm,uv_vertex:Cm,uv2_pars_fragment:Em,uv2_pars_vertex:Tm,uv2_vertex:Pm,worldpos_vertex:Am,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Rm,backgroundCube_frag:Im,cube_vert:Nm,cube_frag:km,depth_vert:Fm,depth_frag:Vm,distanceRGBA_vert:Um,distanceRGBA_frag:Om,equirect_vert:zm,equirect_frag:Bm,linedashed_vert:Gm,linedashed_frag:Hm,meshbasic_vert:Wm,meshbasic_frag:qm,meshlambert_vert:jm,meshlambert_frag:Xm,meshmatcap_vert:$m,meshmatcap_frag:Km,meshnormal_vert:Ym,meshnormal_frag:Zm,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:tg,meshphysical_frag:eg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:rg,points_frag:sg,shadow_vert:og,shadow_frag:ag,sprite_vert:lg,sprite_frag:cg},dt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Fe},uv2Transform:{value:new Fe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}}},rn={basic:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ce([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ce([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ce([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ce([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ce([dt.points,dt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ce([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ce([dt.common,dt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ce([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ce([dt.sprite,dt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ce([dt.common,dt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ce([dt.lights,dt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};rn.physical={uniforms:Ce([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Gr={r:0,b:0,g:0};function ug(c,t,e,i,o,a,h){const u=new Kt(0);let p=a===!0?0:1,d,f,m=null,_=0,b=null;function y(g,S){let D=!1,E=S.isScene===!0?S.background:null;E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E));const L=c.xr,P=L.getSession&&L.getSession();P&&P.environmentBlendMode==="additive"&&(E=null),E===null?x(u,p):E&&E.isColor&&(x(E,1),D=!0),(c.autoClear||D)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Jr)?(f===void 0&&(f=new sn(new Di(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Ai(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,F,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.toneMapped=E.encoding!==Qt,(m!==E||_!==E.version||b!==c.toneMapping)&&(f.material.needsUpdate=!0,m=E,_=E.version,b=c.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(d===void 0&&(d=new sn(new Mo(2,2),new Zn({name:"BackgroundMaterial",uniforms:Ai(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=E,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.toneMapped=E.encoding!==Qt,E.matrixAutoUpdate===!0&&E.updateMatrix(),d.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||_!==E.version||b!==c.toneMapping)&&(d.material.needsUpdate=!0,m=E,_=E.version,b=c.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null))}function x(g,S){g.getRGB(Gr,nc(c)),i.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,h)}return{getClearColor:function(){return u},setClearColor:function(g,S=1){u.set(g),p=S,x(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(g){p=g,x(u,p)},render:y}}function hg(c,t,e,i){const o=c.getParameter(34921),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||a!==null,u={},p=g(null);let d=p,f=!1;function m(V,Z,nt,W,et){let ct=!1;if(h){const at=x(W,nt,Z);d!==at&&(d=at,b(d.object)),ct=S(V,W,nt,et),ct&&D(V,W,nt,et)}else{const at=Z.wireframe===!0;(d.geometry!==W.id||d.program!==nt.id||d.wireframe!==at)&&(d.geometry=W.id,d.program=nt.id,d.wireframe=at,ct=!0)}et!==null&&e.update(et,34963),(ct||f)&&(f=!1,w(V,Z,nt,W),et!==null&&c.bindBuffer(34963,e.get(et).buffer))}function _(){return i.isWebGL2?c.createVertexArray():a.createVertexArrayOES()}function b(V){return i.isWebGL2?c.bindVertexArray(V):a.bindVertexArrayOES(V)}function y(V){return i.isWebGL2?c.deleteVertexArray(V):a.deleteVertexArrayOES(V)}function x(V,Z,nt){const W=nt.wireframe===!0;let et=u[V.id];et===void 0&&(et={},u[V.id]=et);let ct=et[Z.id];ct===void 0&&(ct={},et[Z.id]=ct);let at=ct[W];return at===void 0&&(at=g(_()),ct[W]=at),at}function g(V){const Z=[],nt=[],W=[];for(let et=0;et<o;et++)Z[et]=0,nt[et]=0,W[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:nt,attributeDivisors:W,object:V,attributes:{},index:null}}function S(V,Z,nt,W){const et=d.attributes,ct=Z.attributes;let at=0;const H=nt.getAttributes();for(const $ in H)if(H[$].location>=0){const it=et[$];let mt=ct[$];if(mt===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(mt=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(mt=V.instanceColor)),it===void 0||it.attribute!==mt||mt&&it.data!==mt.data)return!0;at++}return d.attributesNum!==at||d.index!==W}function D(V,Z,nt,W){const et={},ct=Z.attributes;let at=0;const H=nt.getAttributes();for(const $ in H)if(H[$].location>=0){let it=ct[$];it===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(it=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(it=V.instanceColor));const mt={};mt.attribute=it,it&&it.data&&(mt.data=it.data),et[$]=mt,at++}d.attributes=et,d.attributesNum=at,d.index=W}function E(){const V=d.newAttributes;for(let Z=0,nt=V.length;Z<nt;Z++)V[Z]=0}function L(V){P(V,0)}function P(V,Z){const nt=d.newAttributes,W=d.enabledAttributes,et=d.attributeDivisors;nt[V]=1,W[V]===0&&(c.enableVertexAttribArray(V),W[V]=1),et[V]!==Z&&((i.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Z),et[V]=Z)}function N(){const V=d.newAttributes,Z=d.enabledAttributes;for(let nt=0,W=Z.length;nt<W;nt++)Z[nt]!==V[nt]&&(c.disableVertexAttribArray(nt),Z[nt]=0)}function F(V,Z,nt,W,et,ct){i.isWebGL2===!0&&(nt===5124||nt===5125)?c.vertexAttribIPointer(V,Z,nt,et,ct):c.vertexAttribPointer(V,Z,nt,W,et,ct)}function w(V,Z,nt,W){if(i.isWebGL2===!1&&(V.isInstancedMesh||W.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const et=W.attributes,ct=nt.getAttributes(),at=Z.defaultAttributeValues;for(const H in ct){const $=ct[H];if($.location>=0){let tt=et[H];if(tt===void 0&&(H==="instanceMatrix"&&V.instanceMatrix&&(tt=V.instanceMatrix),H==="instanceColor"&&V.instanceColor&&(tt=V.instanceColor)),tt!==void 0){const it=tt.normalized,mt=tt.itemSize,Q=e.get(tt);if(Q===void 0)continue;const Ot=Q.buffer,_t=Q.type,Ct=Q.bytesPerElement;if(tt.isInterleavedBufferAttribute){const gt=tt.data,Ht=gt.stride,Rt=tt.offset;if(gt.isInstancedInterleavedBuffer){for(let Et=0;Et<$.locationSize;Et++)P($.location+Et,gt.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Et=0;Et<$.locationSize;Et++)L($.location+Et);c.bindBuffer(34962,Ot);for(let Et=0;Et<$.locationSize;Et++)F($.location+Et,mt/$.locationSize,_t,it,Ht*Ct,(Rt+mt/$.locationSize*Et)*Ct)}else{if(tt.isInstancedBufferAttribute){for(let gt=0;gt<$.locationSize;gt++)P($.location+gt,tt.meshPerAttribute);V.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<$.locationSize;gt++)L($.location+gt);c.bindBuffer(34962,Ot);for(let gt=0;gt<$.locationSize;gt++)F($.location+gt,mt/$.locationSize,_t,it,mt*Ct,mt/$.locationSize*gt*Ct)}}else if(at!==void 0){const it=at[H];if(it!==void 0)switch(it.length){case 2:c.vertexAttrib2fv($.location,it);break;case 3:c.vertexAttrib3fv($.location,it);break;case 4:c.vertexAttrib4fv($.location,it);break;default:c.vertexAttrib1fv($.location,it)}}}}N()}function R(){rt();for(const V in u){const Z=u[V];for(const nt in Z){const W=Z[nt];for(const et in W)y(W[et].object),delete W[et];delete Z[nt]}delete u[V]}}function O(V){if(u[V.id]===void 0)return;const Z=u[V.id];for(const nt in Z){const W=Z[nt];for(const et in W)y(W[et].object),delete W[et];delete Z[nt]}delete u[V.id]}function Y(V){for(const Z in u){const nt=u[Z];if(nt[V.id]===void 0)continue;const W=nt[V.id];for(const et in W)y(W[et].object),delete W[et];delete nt[V.id]}}function rt(){z(),f=!0,d!==p&&(d=p,b(d.object))}function z(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:m,reset:rt,resetDefaultState:z,dispose:R,releaseStatesOfGeometry:O,releaseStatesOfProgram:Y,initAttributes:E,enableAttribute:L,disableUnusedAttributes:N}}function dg(c,t,e,i){const o=i.isWebGL2;let a;function h(d){a=d}function u(d,f){c.drawArrays(a,d,f),e.update(f,a,1)}function p(d,f,m){if(m===0)return;let _,b;if(o)_=c,b="drawArraysInstanced";else if(_=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[b](a,d,f,m),e.update(f,a,m)}this.setMode=h,this.render=u,this.renderInstances=p}function pg(c,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");i=c.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(F){if(F==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&c instanceof WebGL2ComputeRenderingContext;let u=e.precision!==void 0?e.precision:"highp";const p=a(u);p!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const d=h||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,m=c.getParameter(34930),_=c.getParameter(35660),b=c.getParameter(3379),y=c.getParameter(34076),x=c.getParameter(34921),g=c.getParameter(36347),S=c.getParameter(36348),D=c.getParameter(36349),E=_>0,L=h||t.has("OES_texture_float"),P=E&&L,N=h?c.getParameter(36183):0;return{isWebGL2:h,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:D,vertexTextures:E,floatFragmentTextures:L,floatVertexTextures:P,maxSamples:N}}function fg(c){const t=this;let e=null,i=0,o=!1,a=!1;const h=new zn,u=new Fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_,b){const y=m.length!==0||_||i!==0||o;return o=_,e=f(m,b,0),i=m.length,y},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1,d()},this.setState=function(m,_,b){const y=m.clippingPlanes,x=m.clipIntersection,g=m.clipShadows,S=c.get(m);if(!o||y===null||y.length===0||a&&!g)a?f(null):d();else{const D=a?0:i,E=D*4;let L=S.clippingState||null;p.value=L,L=f(y,_,E,b);for(let P=0;P!==E;++P)L[P]=e[P];S.clippingState=L,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(m,_,b,y){const x=m!==null?m.length:0;let g=null;if(x!==0){if(g=p.value,y!==!0||g===null){const S=b+x*4,D=_.matrixWorldInverse;u.getNormalMatrix(D),(g===null||g.length<S)&&(g=new Float32Array(S));for(let E=0,L=b;E!==x;++E,L+=4)h.copy(m[E]).applyMatrix4(D,u),h.normal.toArray(g,L),g[L+3]=h.constant}p.value=g,p.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function mg(c){let t=new WeakMap;function e(h,u){return u===ho?h.mapping=Ei:u===po&&(h.mapping=Ti),h}function i(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const u=h.mapping;if(u===ho||u===po)if(t.has(h)){const p=t.get(h).texture;return e(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const d=new Tp(p.height/2);return d.fromEquirectangularTexture(c,h),t.set(h,d),h.addEventListener("dispose",o),e(d.texture,h.mapping)}else return null}}return h}function o(h){const u=h.target;u.removeEventListener("dispose",o);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class gg extends ic{constructor(t=-1,e=1,i=1,o=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-t,h=i+t,u=o+e,p=o-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,h=a+d*this.view.width,u-=f*this.view.offsetY,p=u-f*this.view.height}this.projectionMatrix.makeOrthographic(a,h,u,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,_l=[.125,.215,.35,.446,.526,.582],Gn=20,ro=new gg,vl=new Kt;let so=null;const Bn=(1+Math.sqrt(5))/2,wi=1/Bn,xl=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Bn,wi),new G(0,Bn,-wi),new G(wi,0,Bn),new G(-wi,0,Bn),new G(Bn,wi,0),new G(-Bn,wi,0)];class bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){so=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,o,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(so),t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),so=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:He,minFilter:He,generateMipmaps:!1,type:or,format:Ze,encoding:Kn,depthBuffer:!1},o=wl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wl(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(a)),this._blurMaterial=vg(a,t,e)}return o}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,i,o){const u=new We(90,1,e,i),p=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,_=f.toneMapping;f.getClearColor(vl),f.toneMapping=vn,f.autoClear=!1;const b=new Ql({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),y=new sn(new Di,b);let x=!1;const g=t.background;g?g.isColor&&(b.color.copy(g),t.background=null,x=!0):(b.color.copy(vl),x=!0);for(let S=0;S<6;S++){const D=S%3;D===0?(u.up.set(0,p[S],0),u.lookAt(d[S],0,0)):D===1?(u.up.set(0,0,p[S]),u.lookAt(0,d[S],0)):(u.up.set(0,p[S],0),u.lookAt(0,0,d[S]));const E=this._cubeSize;Hr(o,D*E,S>2?E:0,E,E),f.setRenderTarget(o),x&&f.render(y,u),f.render(t,u)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=_,f.autoClear=m,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Ei||t.mapping===Ti;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const a=o?this._cubemapMaterial:this._equirectMaterial,h=new sn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const p=this._cubeSize;Hr(e,0,0,3*p,2*p),i.setRenderTarget(e),i.render(h,ro)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=xl[(o-1)%xl.length];this._blur(t,o-1,o,a,h)}e.autoClear=i}_blur(t,e,i,o,a){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,o,"latitudinal",a),this._halfBlur(h,t,i,i,o,"longitudinal",a)}_halfBlur(t,e,i,o,a,h,u){const p=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new sn(this._lodPlanes[o],d),_=d.uniforms,b=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*b):2*Math.PI/(2*Gn-1),x=a/y,g=isFinite(a)?1+Math.floor(f*x):Gn;g>Gn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gn}`);const S=[];let D=0;for(let F=0;F<Gn;++F){const w=F/x,R=Math.exp(-w*w/2);S.push(R),F===0?D+=R:F<g&&(D+=2*R)}for(let F=0;F<S.length;F++)S[F]=S[F]/D;_.envMap.value=t.texture,_.samples.value=g,_.weights.value=S,_.latitudinal.value=h==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:E}=this;_.dTheta.value=y,_.mipInt.value=E-i;const L=this._sizeLods[o],P=3*L*(o>E-Mi?o-E+Mi:0),N=4*(this._cubeSize-L);Hr(e,P,N,3*L,2*L),p.setRenderTarget(e),p.render(m,ro)}}function _g(c){const t=[],e=[],i=[];let o=c;const a=c-Mi+1+_l.length;for(let h=0;h<a;h++){const u=Math.pow(2,o);e.push(u);let p=1/u;h>c-Mi?p=_l[h-c+Mi-1]:h===0&&(p=0),i.push(p);const d=1/(u-2),f=-d,m=1+d,_=[f,f,m,f,m,m,f,f,m,m,f,m],b=6,y=6,x=3,g=2,S=1,D=new Float32Array(x*y*b),E=new Float32Array(g*y*b),L=new Float32Array(S*y*b);for(let N=0;N<b;N++){const F=N%3*2/3-1,w=N>2?0:-1,R=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];D.set(R,x*y*N),E.set(_,g*y*N);const O=[N,N,N,N,N,N];L.set(O,S*y*N)}const P=new Dn;P.setAttribute("position",new on(D,x)),P.setAttribute("uv",new on(E,g)),P.setAttribute("faceIndex",new on(L,S)),t.push(P),o>Mi&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wl(c,t,e){const i=new Yn(c,t,e);return i.texture.mapping=Jr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(c,t,e,i,o){c.viewport.set(t,e,i,o),c.scissor.set(t,e,i,o)}function vg(c,t,e){const i=new Float32Array(Gn),o=new G(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function yl(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ml(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xg(c){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const p=u.mapping,d=p===ho||p===po,f=p===Ei||p===Ti;if(d||f)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let m=t.get(u);return e===null&&(e=new bl(c)),m=d?e.fromEquirectangular(u,m):e.fromCubemap(u,m),t.set(u,m),m.texture}else{if(t.has(u))return t.get(u).texture;{const m=u.image;if(d&&m&&m.height>0||f&&m&&o(m)){e===null&&(e=new bl(c));const _=d?e.fromEquirectangular(u):e.fromCubemap(u);return t.set(u,_),u.addEventListener("dispose",a),_.texture}else return null}}}return u}function o(u){let p=0;const d=6;for(let f=0;f<d;f++)u[f]!==void 0&&p++;return p===d}function a(u){const p=u.target;p.removeEventListener("dispose",a);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function bg(c){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=c.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function wg(c,t,e,i){const o={},a=new WeakMap;function h(m){const _=m.target;_.index!==null&&t.remove(_.index);for(const y in _.attributes)t.remove(_.attributes[y]);_.removeEventListener("dispose",h),delete o[_.id];const b=a.get(_);b&&(t.remove(b),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function u(m,_){return o[_.id]===!0||(_.addEventListener("dispose",h),o[_.id]=!0,e.memory.geometries++),_}function p(m){const _=m.attributes;for(const y in _)t.update(_[y],34962);const b=m.morphAttributes;for(const y in b){const x=b[y];for(let g=0,S=x.length;g<S;g++)t.update(x[g],34962)}}function d(m){const _=[],b=m.index,y=m.attributes.position;let x=0;if(b!==null){const D=b.array;x=b.version;for(let E=0,L=D.length;E<L;E+=3){const P=D[E+0],N=D[E+1],F=D[E+2];_.push(P,N,N,F,F,P)}}else{const D=y.array;x=y.version;for(let E=0,L=D.length/3-1;E<L;E+=3){const P=E+0,N=E+1,F=E+2;_.push(P,N,N,F,F,P)}}const g=new(Xl(_)?ec:tc)(_,1);g.version=x;const S=a.get(m);S&&t.remove(S),a.set(m,g)}function f(m){const _=a.get(m);if(_){const b=m.index;b!==null&&_.version<b.version&&d(m)}else d(m);return a.get(m)}return{get:u,update:p,getWireframeAttribute:f}}function yg(c,t,e,i){const o=i.isWebGL2;let a;function h(_){a=_}let u,p;function d(_){u=_.type,p=_.bytesPerElement}function f(_,b){c.drawElements(a,b,u,_*p),e.update(b,a,1)}function m(_,b,y){if(y===0)return;let x,g;if(o)x=c,g="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](a,b,u,_*p,y),e.update(b,a,y)}this.setMode=h,this.setIndex=d,this.render=f,this.renderInstances=m}function Mg(c){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,h,u){switch(e.calls++,h){case 4:e.triangles+=u*(a/3);break;case 1:e.lines+=u*(a/2);break;case 3:e.lines+=u*(a-1);break;case 2:e.lines+=u*a;break;case 0:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function Sg(c,t){return c[0]-t[0]}function Cg(c,t){return Math.abs(t[1])-Math.abs(c[1])}function Eg(c,t,e){const i={},o=new Float32Array(8),a=new WeakMap,h=new ve,u=[];for(let d=0;d<8;d++)u[d]=[d,0];function p(d,f,m,_){const b=d.morphTargetInfluences;if(t.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=x!==void 0?x.length:0;let S=a.get(f);if(S===void 0||S.count!==g){let nt=function(){V.dispose(),a.delete(f),f.removeEventListener("dispose",nt)};var y=nt;S!==void 0&&S.texture.dispose();const L=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,N=f.morphAttributes.color!==void 0,F=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let O=0;L===!0&&(O=1),P===!0&&(O=2),N===!0&&(O=3);let Y=f.attributes.position.count*O,rt=1;Y>t.maxTextureSize&&(rt=Math.ceil(Y/t.maxTextureSize),Y=t.maxTextureSize);const z=new Float32Array(Y*rt*4*g),V=new Zl(z,Y,rt,g);V.type=Wn,V.needsUpdate=!0;const Z=O*4;for(let W=0;W<g;W++){const et=F[W],ct=w[W],at=R[W],H=Y*rt*4*W;for(let $=0;$<et.count;$++){const tt=$*Z;L===!0&&(h.fromBufferAttribute(et,$),z[H+tt+0]=h.x,z[H+tt+1]=h.y,z[H+tt+2]=h.z,z[H+tt+3]=0),P===!0&&(h.fromBufferAttribute(ct,$),z[H+tt+4]=h.x,z[H+tt+5]=h.y,z[H+tt+6]=h.z,z[H+tt+7]=0),N===!0&&(h.fromBufferAttribute(at,$),z[H+tt+8]=h.x,z[H+tt+9]=h.y,z[H+tt+10]=h.z,z[H+tt+11]=at.itemSize===4?h.w:1)}}S={count:g,texture:V,size:new Yt(Y,rt)},a.set(f,S),f.addEventListener("dispose",nt)}let D=0;for(let L=0;L<b.length;L++)D+=b[L];const E=f.morphTargetsRelative?1:1-D;_.getUniforms().setValue(c,"morphTargetBaseInfluence",E),_.getUniforms().setValue(c,"morphTargetInfluences",b),_.getUniforms().setValue(c,"morphTargetsTexture",S.texture,e),_.getUniforms().setValue(c,"morphTargetsTextureSize",S.size)}else{const x=b===void 0?0:b.length;let g=i[f.id];if(g===void 0||g.length!==x){g=[];for(let P=0;P<x;P++)g[P]=[P,0];i[f.id]=g}for(let P=0;P<x;P++){const N=g[P];N[0]=P,N[1]=b[P]}g.sort(Cg);for(let P=0;P<8;P++)P<x&&g[P][1]?(u[P][0]=g[P][0],u[P][1]=g[P][1]):(u[P][0]=Number.MAX_SAFE_INTEGER,u[P][1]=0);u.sort(Sg);const S=f.morphAttributes.position,D=f.morphAttributes.normal;let E=0;for(let P=0;P<8;P++){const N=u[P],F=N[0],w=N[1];F!==Number.MAX_SAFE_INTEGER&&w?(S&&f.getAttribute("morphTarget"+P)!==S[F]&&f.setAttribute("morphTarget"+P,S[F]),D&&f.getAttribute("morphNormal"+P)!==D[F]&&f.setAttribute("morphNormal"+P,D[F]),o[P]=w,E+=w):(S&&f.hasAttribute("morphTarget"+P)===!0&&f.deleteAttribute("morphTarget"+P),D&&f.hasAttribute("morphNormal"+P)===!0&&f.deleteAttribute("morphNormal"+P),o[P]=0)}const L=f.morphTargetsRelative?1:1-E;_.getUniforms().setValue(c,"morphTargetBaseInfluence",L),_.getUniforms().setValue(c,"morphTargetInfluences",o)}}return{update:p}}function Tg(c,t,e,i){let o=new WeakMap;function a(p){const d=i.render.frame,f=p.geometry,m=t.get(p,f);return o.get(m)!==d&&(t.update(m),o.set(m,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",u)===!1&&p.addEventListener("dispose",u),e.update(p.instanceMatrix,34962),p.instanceColor!==null&&e.update(p.instanceColor,34962)),m}function h(){o=new WeakMap}function u(p){const d=p.target;d.removeEventListener("dispose",u),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:h}}const ac=new Ve,lc=new Zl,cc=new up,uc=new rc,Sl=[],Cl=[],El=new Float32Array(16),Tl=new Float32Array(9),Pl=new Float32Array(4);function Ri(c,t,e){const i=c[0];if(i<=0||i>0)return c;const o=t*e;let a=Sl[o];if(a===void 0&&(a=new Float32Array(o),Sl[o]=a),t!==0){i.toArray(a,0);for(let h=1,u=0;h!==t;++h)u+=e,c[h].toArray(a,u)}return a}function ue(c,t){if(c.length!==t.length)return!1;for(let e=0,i=c.length;e<i;e++)if(c[e]!==t[e])return!1;return!0}function he(c,t){for(let e=0,i=t.length;e<i;e++)c[e]=t[e]}function Qr(c,t){let e=Cl[t];e===void 0&&(e=new Int32Array(t),Cl[t]=e);for(let i=0;i!==t;++i)e[i]=c.allocateTextureUnit();return e}function Pg(c,t){const e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function Ag(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;c.uniform2fv(this.addr,t),he(e,t)}}function Lg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;c.uniform3fv(this.addr,t),he(e,t)}}function Dg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;c.uniform4fv(this.addr,t),he(e,t)}}function Rg(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(ue(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ue(e,i))return;Pl.set(i),c.uniformMatrix2fv(this.addr,!1,Pl),he(e,i)}}function Ig(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(ue(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ue(e,i))return;Tl.set(i),c.uniformMatrix3fv(this.addr,!1,Tl),he(e,i)}}function Ng(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(ue(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ue(e,i))return;El.set(i),c.uniformMatrix4fv(this.addr,!1,El),he(e,i)}}function kg(c,t){const e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function Fg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;c.uniform2iv(this.addr,t),he(e,t)}}function Vg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;c.uniform3iv(this.addr,t),he(e,t)}}function Ug(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;c.uniform4iv(this.addr,t),he(e,t)}}function Og(c,t){const e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function zg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;c.uniform2uiv(this.addr,t),he(e,t)}}function Bg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;c.uniform3uiv(this.addr,t),he(e,t)}}function Gg(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;c.uniform4uiv(this.addr,t),he(e,t)}}function Hg(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTexture2D(t||ac,o)}function Wg(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||cc,o)}function qg(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||uc,o)}function jg(c,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(c.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||lc,o)}function Xg(c){switch(c){case 5126:return Pg;case 35664:return Ag;case 35665:return Lg;case 35666:return Dg;case 35674:return Rg;case 35675:return Ig;case 35676:return Ng;case 5124:case 35670:return kg;case 35667:case 35671:return Fg;case 35668:case 35672:return Vg;case 35669:case 35673:return Ug;case 5125:return Og;case 36294:return zg;case 36295:return Bg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return jg}}function $g(c,t){c.uniform1fv(this.addr,t)}function Kg(c,t){const e=Ri(t,this.size,2);c.uniform2fv(this.addr,e)}function Yg(c,t){const e=Ri(t,this.size,3);c.uniform3fv(this.addr,e)}function Zg(c,t){const e=Ri(t,this.size,4);c.uniform4fv(this.addr,e)}function Jg(c,t){const e=Ri(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function Qg(c,t){const e=Ri(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function t_(c,t){const e=Ri(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function e_(c,t){c.uniform1iv(this.addr,t)}function n_(c,t){c.uniform2iv(this.addr,t)}function i_(c,t){c.uniform3iv(this.addr,t)}function r_(c,t){c.uniform4iv(this.addr,t)}function s_(c,t){c.uniform1uiv(this.addr,t)}function o_(c,t){c.uniform2uiv(this.addr,t)}function a_(c,t){c.uniform3uiv(this.addr,t)}function l_(c,t){c.uniform4uiv(this.addr,t)}function c_(c,t,e){const i=this.cache,o=t.length,a=Qr(e,o);ue(i,a)||(c.uniform1iv(this.addr,a),he(i,a));for(let h=0;h!==o;++h)e.setTexture2D(t[h]||ac,a[h])}function u_(c,t,e){const i=this.cache,o=t.length,a=Qr(e,o);ue(i,a)||(c.uniform1iv(this.addr,a),he(i,a));for(let h=0;h!==o;++h)e.setTexture3D(t[h]||cc,a[h])}function h_(c,t,e){const i=this.cache,o=t.length,a=Qr(e,o);ue(i,a)||(c.uniform1iv(this.addr,a),he(i,a));for(let h=0;h!==o;++h)e.setTextureCube(t[h]||uc,a[h])}function d_(c,t,e){const i=this.cache,o=t.length,a=Qr(e,o);ue(i,a)||(c.uniform1iv(this.addr,a),he(i,a));for(let h=0;h!==o;++h)e.setTexture2DArray(t[h]||lc,a[h])}function p_(c){switch(c){case 5126:return $g;case 35664:return Kg;case 35665:return Yg;case 35666:return Zg;case 35674:return Jg;case 35675:return Qg;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return s_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return d_}}class f_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Xg(e.type)}}class m_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=p_(e.type)}}class g_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let a=0,h=o.length;a!==h;++a){const u=o[a];u.setValue(t,e[u.id],i)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Al(c,t){c.seq.push(t),c.map[t.id]=t}function __(c,t,e){const i=c.name,o=i.length;for(oo.lastIndex=0;;){const a=oo.exec(i),h=oo.lastIndex;let u=a[1];const p=a[2]==="]",d=a[3];if(p&&(u=u|0),d===void 0||d==="["&&h+2===o){Al(e,d===void 0?new f_(u,c,t):new m_(u,c,t));break}else{let m=e.map[u];m===void 0&&(m=new g_(u),Al(e,m)),e=m}}}class $r{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);__(a,h,this)}}setValue(t,e,i,o){const a=this.map[e];a!==void 0&&a.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let a=0,h=e.length;a!==h;++a){const u=e[a],p=i[u.id];p.needsUpdate!==!1&&u.setValue(t,p.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,a=t.length;o!==a;++o){const h=t[o];h.id in e&&i.push(h)}return i}}function Ll(c,t,e){const i=c.createShader(t);return c.shaderSource(i,e),c.compileShader(i),i}let v_=0;function x_(c,t){const e=c.split(`
`),i=[],o=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let h=o;h<a;h++){const u=h+1;i.push(`${u===t?">":" "} ${u}: ${e[h]}`)}return i.join(`
`)}function b_(c){switch(c){case Kn:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Dl(c,t,e){const i=c.getShaderParameter(t,35713),o=c.getShaderInfoLog(t).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const h=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+x_(c.getShaderSource(t),h)}else return o}function w_(c,t){const e=b_(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function y_(c,t){let e;switch(t){case Vd:e="Linear";break;case Ud:e="Reinhard";break;case Od:e="OptimizedCineon";break;case zd:e="ACESFilmic";break;case Bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function M_(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function S_(c){const t=[];for(const e in c){const i=c[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function C_(c,t){const e={},i=c.getProgramParameter(t,35721);for(let o=0;o<i;o++){const a=c.getActiveAttrib(t,o),h=a.name;let u=1;a.type===35674&&(u=2),a.type===35675&&(u=3),a.type===35676&&(u=4),e[h]={type:a.type,location:c.getAttribLocation(t,h),locationSize:u}}return e}function ir(c){return c!==""}function Rl(c,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(c){return c.replace(E_,T_)}function T_(c,t){const e=Ft[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return vo(e)}const P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(c){return c.replace(P_,A_)}function A_(c,t,e,i){let o="";for(let a=parseInt(t);a<parseInt(e);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function kl(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L_(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===zl?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===md?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===nr&&(t="SHADOWMAP_TYPE_VSM"),t}function D_(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R_(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function I_(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case kd:t="ENVMAP_BLENDING_MIX";break;case Fd:t="ENVMAP_BLENDING_ADD";break}return t}function N_(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function k_(c,t,e,i){const o=c.getContext(),a=e.defines;let h=e.vertexShader,u=e.fragmentShader;const p=L_(e),d=D_(e),f=R_(e),m=I_(e),_=N_(e),b=e.isWebGL2?"":M_(e),y=S_(a),x=o.createProgram();let g,S,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[y].filter(ir).join(`
`),g.length>0&&(g+=`
`),S=[b,y].filter(ir).join(`
`),S.length>0&&(S+=`
`)):(g=[kl(e),"#define SHADER_NAME "+e.shaderName,y,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),S=[b,kl(e),"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==vn?y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.encodings_pars_fragment,w_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),h=vo(h),h=Rl(h,e),h=Il(h,e),u=vo(u),u=Rl(u,e),u=Il(u,e),h=Nl(h),u=Nl(u),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,S=["#define varying in",e.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=D+g+h,L=D+S+u,P=Ll(o,35633,E),N=Ll(o,35632,L);if(o.attachShader(x,P),o.attachShader(x,N),e.index0AttributeName!==void 0?o.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x),c.debug.checkShaderErrors){const R=o.getProgramInfoLog(x).trim(),O=o.getShaderInfoLog(P).trim(),Y=o.getShaderInfoLog(N).trim();let rt=!0,z=!0;if(o.getProgramParameter(x,35714)===!1){rt=!1;const V=Dl(o,P,"vertex"),Z=Dl(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,35715)+`

Program Info Log: `+R+`
`+V+`
`+Z)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(O===""||Y==="")&&(z=!1);z&&(this.diagnostics={runnable:rt,programLog:R,vertexShader:{log:O,prefix:g},fragmentShader:{log:Y,prefix:S}})}o.deleteShader(P),o.deleteShader(N);let F;this.getUniforms=function(){return F===void 0&&(F=new $r(o,x)),F};let w;return this.getAttributes=function(){return w===void 0&&(w=C_(o,x)),w},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=v_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=N,this}let F_=0;class V_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),a=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new U_(t),e.set(t,i)),i}}class U_{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}}function O_(c,t,e,i,o,a,h){const u=new Jl,p=new V_,d=[],f=o.isWebGL2,m=o.logarithmicDepthBuffer,_=o.vertexTextures;let b=o.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w,R,O,Y,rt){const z=Y.fog,V=rt.geometry,Z=w.isMeshStandardMaterial?Y.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),W=nt&&nt.mapping===Jr?nt.image.height:null,et=y[w.type];w.precision!==null&&(b=o.getMaxPrecision(w.precision),b!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=ct!==void 0?ct.length:0;let H=0;V.morphAttributes.position!==void 0&&(H=1),V.morphAttributes.normal!==void 0&&(H=2),V.morphAttributes.color!==void 0&&(H=3);let $,tt,it,mt;if(et){const Ht=rn[et];$=Ht.vertexShader,tt=Ht.fragmentShader}else $=w.vertexShader,tt=w.fragmentShader,p.update(w),it=p.getVertexShaderID(w),mt=p.getFragmentShaderID(w);const Q=c.getRenderTarget(),Ot=w.alphaTest>0,_t=w.clearcoat>0,Ct=w.iridescence>0;return{isWebGL2:f,shaderID:et,shaderName:w.type,vertexShader:$,fragmentShader:tt,defines:w.defines,customVertexShaderID:it,customFragmentShaderID:mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,instancing:rt.isInstancedMesh===!0,instancingColor:rt.isInstancedMesh===!0&&rt.instanceColor!==null,supportsVertexTextures:_,outputEncoding:Q===null?c.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:Kn,map:!!w.map,matcap:!!w.matcap,envMap:!!nt,envMapMode:nt&&nt.mapping,envMapCubeUVHeight:W,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===op,tangentSpaceNormalMap:w.normalMapType===jl,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Qt,clearcoat:_t,clearcoatMap:_t&&!!w.clearcoatMap,clearcoatRoughnessMap:_t&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:_t&&!!w.clearcoatNormalMap,iridescence:Ct,iridescenceMap:Ct&&!!w.iridescenceMap,iridescenceThicknessMap:Ct&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===Si,alphaMap:!!w.alphaMap,alphaTest:Ot,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!V.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(w.map||w.bumpMap||w.normalMap||w.specularMap||w.alphaMap||w.emissiveMap||w.roughnessMap||w.metalnessMap||w.clearcoatNormalMap||w.iridescenceMap||w.iridescenceThicknessMap||w.transmission>0||w.transmissionMap||w.thicknessMap||w.specularIntensityMap||w.specularColorMap||w.sheen>0||w.sheenColorMap||w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!z,useFog:w.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:m,skinning:rt.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:H,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&O.length>0,shadowMapType:c.shadowMap.type,toneMapping:w.toneMapped?c.toneMapping:vn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wo,flipSided:w.side===qe,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function g(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const O in w.defines)R.push(O),R.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(S(R,w),D(R,w),R.push(c.outputEncoding)),R.push(w.customProgramCacheKey),R.join()}function S(w,R){w.push(R.precision),w.push(R.outputEncoding),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.combine),w.push(R.vertexUvs),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function D(w,R){u.disableAll(),R.isWebGL2&&u.enable(0),R.supportsVertexTextures&&u.enable(1),R.instancing&&u.enable(2),R.instancingColor&&u.enable(3),R.map&&u.enable(4),R.matcap&&u.enable(5),R.envMap&&u.enable(6),R.lightMap&&u.enable(7),R.aoMap&&u.enable(8),R.emissiveMap&&u.enable(9),R.bumpMap&&u.enable(10),R.normalMap&&u.enable(11),R.objectSpaceNormalMap&&u.enable(12),R.tangentSpaceNormalMap&&u.enable(13),R.clearcoat&&u.enable(14),R.clearcoatMap&&u.enable(15),R.clearcoatRoughnessMap&&u.enable(16),R.clearcoatNormalMap&&u.enable(17),R.iridescence&&u.enable(18),R.iridescenceMap&&u.enable(19),R.iridescenceThicknessMap&&u.enable(20),R.displacementMap&&u.enable(21),R.specularMap&&u.enable(22),R.roughnessMap&&u.enable(23),R.metalnessMap&&u.enable(24),R.gradientMap&&u.enable(25),R.alphaMap&&u.enable(26),R.alphaTest&&u.enable(27),R.vertexColors&&u.enable(28),R.vertexAlphas&&u.enable(29),R.vertexUvs&&u.enable(30),R.vertexTangents&&u.enable(31),R.uvsVertexOnly&&u.enable(32),w.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.skinning&&u.enable(4),R.morphTargets&&u.enable(5),R.morphNormals&&u.enable(6),R.morphColors&&u.enable(7),R.premultipliedAlpha&&u.enable(8),R.shadowMapEnabled&&u.enable(9),R.physicallyCorrectLights&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.specularIntensityMap&&u.enable(15),R.specularColorMap&&u.enable(16),R.transmission&&u.enable(17),R.transmissionMap&&u.enable(18),R.thicknessMap&&u.enable(19),R.sheen&&u.enable(20),R.sheenColorMap&&u.enable(21),R.sheenRoughnessMap&&u.enable(22),R.decodeVideoTexture&&u.enable(23),R.opaque&&u.enable(24),w.push(u.mask)}function E(w){const R=y[w.type];let O;if(R){const Y=rn[R];O=Mp.clone(Y.uniforms)}else O=w.uniforms;return O}function L(w,R){let O;for(let Y=0,rt=d.length;Y<rt;Y++){const z=d[Y];if(z.cacheKey===R){O=z,++O.usedTimes;break}}return O===void 0&&(O=new k_(c,R,w,a),d.push(O)),O}function P(w){if(--w.usedTimes===0){const R=d.indexOf(w);d[R]=d[d.length-1],d.pop(),w.destroy()}}function N(w){p.remove(w)}function F(){p.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:L,releaseProgram:P,releaseShaderCache:N,programs:d,dispose:F}}function z_(){let c=new WeakMap;function t(a){let h=c.get(a);return h===void 0&&(h={},c.set(a,h)),h}function e(a){c.delete(a)}function i(a,h,u){c.get(a)[h]=u}function o(){c=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function B_(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function Fl(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function Vl(){const c=[];let t=0;const e=[],i=[],o=[];function a(){t=0,e.length=0,i.length=0,o.length=0}function h(m,_,b,y,x,g){let S=c[t];return S===void 0?(S={id:m.id,object:m,geometry:_,material:b,groupOrder:y,renderOrder:m.renderOrder,z:x,group:g},c[t]=S):(S.id=m.id,S.object=m,S.geometry=_,S.material=b,S.groupOrder=y,S.renderOrder=m.renderOrder,S.z=x,S.group=g),t++,S}function u(m,_,b,y,x,g){const S=h(m,_,b,y,x,g);b.transmission>0?i.push(S):b.transparent===!0?o.push(S):e.push(S)}function p(m,_,b,y,x,g){const S=h(m,_,b,y,x,g);b.transmission>0?i.unshift(S):b.transparent===!0?o.unshift(S):e.unshift(S)}function d(m,_){e.length>1&&e.sort(m||B_),i.length>1&&i.sort(_||Fl),o.length>1&&o.sort(_||Fl)}function f(){for(let m=t,_=c.length;m<_;m++){const b=c[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:i,transparent:o,init:a,push:u,unshift:p,finish:f,sort:d}}function G_(){let c=new WeakMap;function t(i,o){const a=c.get(i);let h;return a===void 0?(h=new Vl,c.set(i,[h])):o>=a.length?(h=new Vl,a.push(h)):h=a[o],h}function e(){c=new WeakMap}return{get:t,dispose:e}}function H_(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Kt};break;case"SpotLight":e={position:new G,direction:new G,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new G,halfWidth:new G,halfHeight:new G};break}return c[t.id]=e,e}}}function W_(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}let q_=0;function j_(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function X_(c,t){const e=new H_,i=W_(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)o.probe.push(new G);const a=new G,h=new xe,u=new xe;function p(f,m){let _=0,b=0,y=0;for(let Y=0;Y<9;Y++)o.probe[Y].set(0,0,0);let x=0,g=0,S=0,D=0,E=0,L=0,P=0,N=0,F=0,w=0;f.sort(j_);const R=m!==!0?Math.PI:1;for(let Y=0,rt=f.length;Y<rt;Y++){const z=f[Y],V=z.color,Z=z.intensity,nt=z.distance,W=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=V.r*Z*R,b+=V.g*Z*R,y+=V.b*Z*R;else if(z.isLightProbe)for(let et=0;et<9;et++)o.probe[et].addScaledVector(z.sh.coefficients[et],Z);else if(z.isDirectionalLight){const et=e.get(z);if(et.color.copy(z.color).multiplyScalar(z.intensity*R),z.castShadow){const ct=z.shadow,at=i.get(z);at.shadowBias=ct.bias,at.shadowNormalBias=ct.normalBias,at.shadowRadius=ct.radius,at.shadowMapSize=ct.mapSize,o.directionalShadow[x]=at,o.directionalShadowMap[x]=W,o.directionalShadowMatrix[x]=z.shadow.matrix,L++}o.directional[x]=et,x++}else if(z.isSpotLight){const et=e.get(z);et.position.setFromMatrixPosition(z.matrixWorld),et.color.copy(V).multiplyScalar(Z*R),et.distance=nt,et.coneCos=Math.cos(z.angle),et.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),et.decay=z.decay,o.spot[S]=et;const ct=z.shadow;if(z.map&&(o.spotLightMap[F]=z.map,F++,ct.updateMatrices(z),z.castShadow&&w++),o.spotLightMatrix[S]=ct.matrix,z.castShadow){const at=i.get(z);at.shadowBias=ct.bias,at.shadowNormalBias=ct.normalBias,at.shadowRadius=ct.radius,at.shadowMapSize=ct.mapSize,o.spotShadow[S]=at,o.spotShadowMap[S]=W,N++}S++}else if(z.isRectAreaLight){const et=e.get(z);et.color.copy(V).multiplyScalar(Z),et.halfWidth.set(z.width*.5,0,0),et.halfHeight.set(0,z.height*.5,0),o.rectArea[D]=et,D++}else if(z.isPointLight){const et=e.get(z);if(et.color.copy(z.color).multiplyScalar(z.intensity*R),et.distance=z.distance,et.decay=z.decay,z.castShadow){const ct=z.shadow,at=i.get(z);at.shadowBias=ct.bias,at.shadowNormalBias=ct.normalBias,at.shadowRadius=ct.radius,at.shadowMapSize=ct.mapSize,at.shadowCameraNear=ct.camera.near,at.shadowCameraFar=ct.camera.far,o.pointShadow[g]=at,o.pointShadowMap[g]=W,o.pointShadowMatrix[g]=z.shadow.matrix,P++}o.point[g]=et,g++}else if(z.isHemisphereLight){const et=e.get(z);et.skyColor.copy(z.color).multiplyScalar(Z*R),et.groundColor.copy(z.groundColor).multiplyScalar(Z*R),o.hemi[E]=et,E++}}D>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=dt.LTC_FLOAT_1,o.rectAreaLTC2=dt.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=dt.LTC_HALF_1,o.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=b,o.ambient[2]=y;const O=o.hash;(O.directionalLength!==x||O.pointLength!==g||O.spotLength!==S||O.rectAreaLength!==D||O.hemiLength!==E||O.numDirectionalShadows!==L||O.numPointShadows!==P||O.numSpotShadows!==N||O.numSpotMaps!==F)&&(o.directional.length=x,o.spot.length=S,o.rectArea.length=D,o.point.length=g,o.hemi.length=E,o.directionalShadow.length=L,o.directionalShadowMap.length=L,o.pointShadow.length=P,o.pointShadowMap.length=P,o.spotShadow.length=N,o.spotShadowMap.length=N,o.directionalShadowMatrix.length=L,o.pointShadowMatrix.length=P,o.spotLightMatrix.length=N+F-w,o.spotLightMap.length=F,o.numSpotLightShadowsWithMaps=w,O.directionalLength=x,O.pointLength=g,O.spotLength=S,O.rectAreaLength=D,O.hemiLength=E,O.numDirectionalShadows=L,O.numPointShadows=P,O.numSpotShadows=N,O.numSpotMaps=F,o.version=q_++)}function d(f,m){let _=0,b=0,y=0,x=0,g=0;const S=m.matrixWorldInverse;for(let D=0,E=f.length;D<E;D++){const L=f[D];if(L.isDirectionalLight){const P=o.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),_++}else if(L.isSpotLight){const P=o.spot[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const P=o.rectArea[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),u.identity(),h.copy(L.matrixWorld),h.premultiply(S),u.extractRotation(h),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),x++}else if(L.isPointLight){const P=o.point[b];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),b++}else if(L.isHemisphereLight){const P=o.hemi[g];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),g++}}}return{setup:p,setupView:d,state:o}}function Ul(c,t){const e=new X_(c,t),i=[],o=[];function a(){i.length=0,o.length=0}function h(m){i.push(m)}function u(m){o.push(m)}function p(m){e.setup(i,m)}function d(m){e.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:e},setupLights:p,setupLightsView:d,pushLight:h,pushShadow:u}}function $_(c,t){let e=new WeakMap;function i(a,h=0){const u=e.get(a);let p;return u===void 0?(p=new Ul(c,t),e.set(a,[p])):h>=u.length?(p=new Ul(c,t),u.push(p)):p=u[h],p}function o(){e=new WeakMap}return{get:i,dispose:o}}class K_ extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Y_ extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q_(c,t,e){let i=new sc;const o=new Yt,a=new Yt,h=new ve,u=new K_({depthPacking:sp}),p=new Y_,d={},f=e.maxTextureSize,m={0:qe,1:Xn,2:wo},_=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const y=new Dn;y.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new sn(y,_),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl,this.render=function(L,P,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const F=c.getRenderTarget(),w=c.getActiveCubeFace(),R=c.getActiveMipmapLevel(),O=c.state;O.setBlending(Ln),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let Y=0,rt=L.length;Y<rt;Y++){const z=L[Y],V=z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const Z=V.getFrameExtents();if(o.multiply(Z),a.copy(V.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(a.x=Math.floor(f/Z.x),o.x=a.x*Z.x,V.mapSize.x=a.x),o.y>f&&(a.y=Math.floor(f/Z.y),o.y=a.y*Z.y,V.mapSize.y=a.y)),V.map===null){const W=this.type!==nr?{minFilter:Ee,magFilter:Ee}:{};V.map=new Yn(o.x,o.y,W),V.map.texture.name=z.name+".shadowMap",V.camera.updateProjectionMatrix()}c.setRenderTarget(V.map),c.clear();const nt=V.getViewportCount();for(let W=0;W<nt;W++){const et=V.getViewport(W);h.set(a.x*et.x,a.y*et.y,a.x*et.z,a.y*et.w),O.viewport(h),V.updateMatrices(z,W),i=V.getFrustum(),E(P,N,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===nr&&S(V,N),V.needsUpdate=!1}g.needsUpdate=!1,c.setRenderTarget(F,w,R)};function S(L,P){const N=t.update(x);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yn(o.x,o.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,c.setRenderTarget(L.mapPass),c.clear(),c.renderBufferDirect(P,null,N,_,x,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value=L.mapSize,b.uniforms.radius.value=L.radius,c.setRenderTarget(L.map),c.clear(),c.renderBufferDirect(P,null,N,b,x,null)}function D(L,P,N,F,w,R){let O=null;const Y=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Y!==void 0)O=Y;else if(O=N.isPointLight===!0?p:u,c.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const rt=O.uuid,z=P.uuid;let V=d[rt];V===void 0&&(V={},d[rt]=V);let Z=V[z];Z===void 0&&(Z=O.clone(),V[z]=Z),O=Z}return O.visible=P.visible,O.wireframe=P.wireframe,R===nr?O.side=P.shadowSide!==null?P.shadowSide:P.side:O.side=P.shadowSide!==null?P.shadowSide:m[P.side],O.alphaMap=P.alphaMap,O.alphaTest=P.alphaTest,O.map=P.map,O.clipShadows=P.clipShadows,O.clippingPlanes=P.clippingPlanes,O.clipIntersection=P.clipIntersection,O.displacementMap=P.displacementMap,O.displacementScale=P.displacementScale,O.displacementBias=P.displacementBias,O.wireframeLinewidth=P.wireframeLinewidth,O.linewidth=P.linewidth,N.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(N.matrixWorld),O.nearDistance=F,O.farDistance=w),O}function E(L,P,N,F,w){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===nr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const Y=t.update(L),rt=L.material;if(Array.isArray(rt)){const z=Y.groups;for(let V=0,Z=z.length;V<Z;V++){const nt=z[V],W=rt[nt.materialIndex];if(W&&W.visible){const et=D(L,W,F,N.near,N.far,w);c.renderBufferDirect(N,null,Y,et,L,nt)}}}else if(rt.visible){const z=D(L,rt,F,N.near,N.far,w);c.renderBufferDirect(N,null,Y,z,L,null)}}const O=L.children;for(let Y=0,rt=O.length;Y<rt;Y++)E(O[Y],P,N,F,w)}}function tv(c,t,e){const i=e.isWebGL2;function o(){let I=!1;const j=new ve;let ot=null;const ht=new ve(0,0,0,0);return{setMask:function(xt){ot!==xt&&!I&&(c.colorMask(xt,xt,xt,xt),ot=xt)},setLocked:function(xt){I=xt},setClear:function(xt,kt,se,ie,Je){Je===!0&&(xt*=ie,kt*=ie,se*=ie),j.set(xt,kt,se,ie),ht.equals(j)===!1&&(c.clearColor(xt,kt,se,ie),ht.copy(j))},reset:function(){I=!1,ot=null,ht.set(-1,0,0,0)}}}function a(){let I=!1,j=null,ot=null,ht=null;return{setTest:function(xt){xt?Ot(2929):_t(2929)},setMask:function(xt){j!==xt&&!I&&(c.depthMask(xt),j=xt)},setFunc:function(xt){if(ot!==xt){switch(xt){case Pd:c.depthFunc(512);break;case Ad:c.depthFunc(519);break;case Ld:c.depthFunc(513);break;case uo:c.depthFunc(515);break;case Dd:c.depthFunc(514);break;case Rd:c.depthFunc(518);break;case Id:c.depthFunc(516);break;case Nd:c.depthFunc(517);break;default:c.depthFunc(515)}ot=xt}},setLocked:function(xt){I=xt},setClear:function(xt){ht!==xt&&(c.clearDepth(xt),ht=xt)},reset:function(){I=!1,j=null,ot=null,ht=null}}}function h(){let I=!1,j=null,ot=null,ht=null,xt=null,kt=null,se=null,ie=null,Je=null;return{setTest:function(Xt){I||(Xt?Ot(2960):_t(2960))},setMask:function(Xt){j!==Xt&&!I&&(c.stencilMask(Xt),j=Xt)},setFunc:function(Xt,De,be){(ot!==Xt||ht!==De||xt!==be)&&(c.stencilFunc(Xt,De,be),ot=Xt,ht=De,xt=be)},setOp:function(Xt,De,be){(kt!==Xt||se!==De||ie!==be)&&(c.stencilOp(Xt,De,be),kt=Xt,se=De,ie=be)},setLocked:function(Xt){I=Xt},setClear:function(Xt){Je!==Xt&&(c.clearStencil(Xt),Je=Xt)},reset:function(){I=!1,j=null,ot=null,ht=null,xt=null,kt=null,se=null,ie=null,Je=null}}}const u=new o,p=new a,d=new h,f=new WeakMap,m=new WeakMap;let _={},b={},y=new WeakMap,x=[],g=null,S=!1,D=null,E=null,L=null,P=null,N=null,F=null,w=null,R=!1,O=null,Y=null,rt=null,z=null,V=null;const Z=c.getParameter(35661);let nt=!1,W=0;const et=c.getParameter(7938);et.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(et)[1]),nt=W>=1):et.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),nt=W>=2);let ct=null,at={};const H=c.getParameter(3088),$=c.getParameter(2978),tt=new ve().fromArray(H),it=new ve().fromArray($);function mt(I,j,ot){const ht=new Uint8Array(4),xt=c.createTexture();c.bindTexture(I,xt),c.texParameteri(I,10241,9728),c.texParameteri(I,10240,9728);for(let kt=0;kt<ot;kt++)c.texImage2D(j+kt,0,6408,1,1,0,6408,5121,ht);return xt}const Q={};Q[3553]=mt(3553,3553,1),Q[34067]=mt(34067,34069,6),u.setClear(0,0,0,1),p.setClear(1),d.setClear(0),Ot(2929),p.setFunc(uo),me(!1),Pe(Aa),Ot(2884),pe(Ln);function Ot(I){_[I]!==!0&&(c.enable(I),_[I]=!0)}function _t(I){_[I]!==!1&&(c.disable(I),_[I]=!1)}function Ct(I,j){return b[I]!==j?(c.bindFramebuffer(I,j),b[I]=j,i&&(I===36009&&(b[36160]=j),I===36160&&(b[36009]=j)),!0):!1}function gt(I,j){let ot=x,ht=!1;if(I)if(ot=y.get(j),ot===void 0&&(ot=[],y.set(j,ot)),I.isWebGLMultipleRenderTargets){const xt=I.texture;if(ot.length!==xt.length||ot[0]!==36064){for(let kt=0,se=xt.length;kt<se;kt++)ot[kt]=36064+kt;ot.length=xt.length,ht=!0}}else ot[0]!==36064&&(ot[0]=36064,ht=!0);else ot[0]!==1029&&(ot[0]=1029,ht=!0);ht&&(e.isWebGL2?c.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Ht(I){return g!==I?(c.useProgram(I),g=I,!0):!1}const Rt={[yi]:32774,[_d]:32778,[vd]:32779};if(i)Rt[Ia]=32775,Rt[Na]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(Rt[Ia]=I.MIN_EXT,Rt[Na]=I.MAX_EXT)}const Et={[xd]:0,[bd]:1,[wd]:768,[Bl]:770,[Td]:776,[Cd]:774,[Md]:772,[yd]:769,[Gl]:771,[Ed]:775,[Sd]:773};function pe(I,j,ot,ht,xt,kt,se,ie){if(I===Ln){S===!0&&(_t(3042),S=!1);return}if(S===!1&&(Ot(3042),S=!0),I!==gd){if(I!==D||ie!==R){if((E!==yi||N!==yi)&&(c.blendEquation(32774),E=yi,N=yi),ie)switch(I){case Si:c.blendFuncSeparate(1,771,1,771);break;case La:c.blendFunc(1,1);break;case Da:c.blendFuncSeparate(0,769,0,1);break;case Ra:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Si:c.blendFuncSeparate(770,771,1,771);break;case La:c.blendFunc(770,1);break;case Da:c.blendFuncSeparate(0,769,0,1);break;case Ra:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}L=null,P=null,F=null,w=null,D=I,R=ie}return}xt=xt||j,kt=kt||ot,se=se||ht,(j!==E||xt!==N)&&(c.blendEquationSeparate(Rt[j],Rt[xt]),E=j,N=xt),(ot!==L||ht!==P||kt!==F||se!==w)&&(c.blendFuncSeparate(Et[ot],Et[ht],Et[kt],Et[se]),L=ot,P=ht,F=kt,w=se),D=I,R=!1}function fe(I,j){I.side===wo?_t(2884):Ot(2884);let ot=I.side===qe;j&&(ot=!ot),me(ot),I.blending===Si&&I.transparent===!1?pe(Ln):pe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),p.setFunc(I.depthFunc),p.setTest(I.depthTest),p.setMask(I.depthWrite),u.setMask(I.colorWrite);const ht=I.stencilWrite;d.setTest(ht),ht&&(d.setMask(I.stencilWriteMask),d.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),d.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ot(32926):_t(32926)}function me(I){O!==I&&(I?c.frontFace(2304):c.frontFace(2305),O=I)}function Pe(I){I!==pd?(Ot(2884),I!==Y&&(I===Aa?c.cullFace(1029):I===fd?c.cullFace(1028):c.cullFace(1032))):_t(2884),Y=I}function te(I){I!==rt&&(nt&&c.lineWidth(I),rt=I)}function jt(I,j,ot){I?(Ot(32823),(z!==j||V!==ot)&&(c.polygonOffset(j,ot),z=j,V=ot)):_t(32823)}function Ue(I){I?Ot(3089):_t(3089)}function Ae(I){I===void 0&&(I=33984+Z-1),ct!==I&&(c.activeTexture(I),ct=I)}function T(I,j,ot){ot===void 0&&(ct===null?ot=33984+Z-1:ot=ct);let ht=at[ot];ht===void 0&&(ht={type:void 0,texture:void 0},at[ot]=ht),(ht.type!==I||ht.texture!==j)&&(ct!==ot&&(c.activeTexture(ot),ct=ot),c.bindTexture(I,j||Q[I]),ht.type=I,ht.texture=j)}function M(){const I=at[ct];I!==void 0&&I.type!==void 0&&(c.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{c.compressedTexImage2D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{c.compressedTexImage3D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{c.texSubImage2D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{c.texSubImage3D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{c.texStorage2D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{c.texStorage3D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{c.texImage2D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{c.texImage3D.apply(c,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(I){tt.equals(I)===!1&&(c.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function bt(I){it.equals(I)===!1&&(c.viewport(I.x,I.y,I.z,I.w),it.copy(I))}function Gt(I,j){let ot=m.get(j);ot===void 0&&(ot=new WeakMap,m.set(j,ot));let ht=ot.get(I);ht===void 0&&(ht=c.getUniformBlockIndex(j,I.name),ot.set(I,ht))}function Zt(I,j){const ht=m.get(j).get(I);f.get(j)!==ht&&(c.uniformBlockBinding(j,ht,I.__bindingPointIndex),f.set(j,ht))}function re(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),i===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),_={},ct=null,at={},b={},y=new WeakMap,x=[],g=null,S=!1,D=null,E=null,L=null,P=null,N=null,F=null,w=null,R=!1,O=null,Y=null,rt=null,z=null,V=null,tt.set(0,0,c.canvas.width,c.canvas.height),it.set(0,0,c.canvas.width,c.canvas.height),u.reset(),p.reset(),d.reset()}return{buffers:{color:u,depth:p,stencil:d},enable:Ot,disable:_t,bindFramebuffer:Ct,drawBuffers:gt,useProgram:Ht,setBlending:pe,setMaterial:fe,setFlipSided:me,setCullFace:Pe,setLineWidth:te,setPolygonOffset:jt,setScissorTest:Ue,activeTexture:Ae,bindTexture:T,unbindTexture:M,compressedTexImage2D:q,compressedTexImage3D:lt,texImage2D:Tt,texImage3D:vt,updateUBOMapping:Gt,uniformBlockBinding:Zt,texStorage2D:J,texStorage3D:wt,texSubImage2D:ut,texSubImage3D:ft,compressedTexSubImage2D:At,compressedTexSubImage3D:pt,scissor:Mt,viewport:bt,reset:re}}function ev(c,t,e,i,o,a,h){const u=o.isWebGL2,p=o.maxTextures,d=o.maxCubemapSize,f=o.maxTextureSize,m=o.maxSamples,_=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let x;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(T,M){return S?new OffscreenCanvas(T,M):Kr("canvas")}function E(T,M,q,lt){let ut=1;if((T.width>lt||T.height>lt)&&(ut=lt/Math.max(T.width,T.height)),ut<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ft=M?_o:Math.floor,At=ft(ut*T.width),pt=ft(ut*T.height);x===void 0&&(x=D(At,pt));const J=q?D(At,pt):x;return J.width=At,J.height=pt,J.getContext("2d").drawImage(T,0,0,At,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+At+"x"+pt+")."),J}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function L(T){return ol(T.width)&&ol(T.height)}function P(T){return u?!1:T.wrapS!==Ye||T.wrapT!==Ye||T.minFilter!==Ee&&T.minFilter!==He}function N(T,M){return T.generateMipmaps&&M&&T.minFilter!==Ee&&T.minFilter!==He}function F(T){c.generateMipmap(T)}function w(T,M,q,lt,ut=!1){if(u===!1)return M;if(T!==null){if(c[T]!==void 0)return c[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ft=M;return M===6403&&(q===5126&&(ft=33326),q===5131&&(ft=33325),q===5121&&(ft=33321)),M===33319&&(q===5126&&(ft=33328),q===5131&&(ft=33327),q===5121&&(ft=33323)),M===6408&&(q===5126&&(ft=34836),q===5131&&(ft=34842),q===5121&&(ft=lt===Qt&&ut===!1?35907:32856),q===32819&&(ft=32854),q===32820&&(ft=32855)),(ft===33325||ft===33326||ft===33327||ft===33328||ft===34842||ft===34836)&&t.get("EXT_color_buffer_float"),ft}function R(T,M,q){return N(T,q)===!0||T.isFramebufferTexture&&T.minFilter!==Ee&&T.minFilter!==He?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function O(T){return T===Ee||T===ka||T===Ls?9728:9729}function Y(T){const M=T.target;M.removeEventListener("dispose",Y),z(M),M.isVideoTexture&&y.delete(M)}function rt(T){const M=T.target;M.removeEventListener("dispose",rt),Z(M)}function z(T){const M=i.get(T);if(M.__webglInit===void 0)return;const q=T.source,lt=g.get(q);if(lt){const ut=lt[M.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&V(T),Object.keys(lt).length===0&&g.delete(q)}i.remove(T)}function V(T){const M=i.get(T);c.deleteTexture(M.__webglTexture);const q=T.source,lt=g.get(q);delete lt[M.__cacheKey],h.memory.textures--}function Z(T){const M=T.texture,q=i.get(T),lt=i.get(M);if(lt.__webglTexture!==void 0&&(c.deleteTexture(lt.__webglTexture),h.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++)c.deleteFramebuffer(q.__webglFramebuffer[ut]),q.__webglDepthbuffer&&c.deleteRenderbuffer(q.__webglDepthbuffer[ut]);else{if(c.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&c.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&c.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ut=0;ut<q.__webglColorRenderbuffer.length;ut++)q.__webglColorRenderbuffer[ut]&&c.deleteRenderbuffer(q.__webglColorRenderbuffer[ut]);q.__webglDepthRenderbuffer&&c.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ut=0,ft=M.length;ut<ft;ut++){const At=i.get(M[ut]);At.__webglTexture&&(c.deleteTexture(At.__webglTexture),h.memory.textures--),i.remove(M[ut])}i.remove(M),i.remove(T)}let nt=0;function W(){nt=0}function et(){const T=nt;return T>=p&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+p),nt+=1,T}function ct(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function at(T,M){const q=i.get(T);if(T.isVideoTexture&&Ue(T),T.isRenderTargetTexture===!1&&T.version>0&&q.__version!==T.version){const lt=T.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(q,T,M);return}}e.bindTexture(3553,q.__webglTexture,33984+M)}function H(T,M){const q=i.get(T);if(T.version>0&&q.__version!==T.version){_t(q,T,M);return}e.bindTexture(35866,q.__webglTexture,33984+M)}function $(T,M){const q=i.get(T);if(T.version>0&&q.__version!==T.version){_t(q,T,M);return}e.bindTexture(32879,q.__webglTexture,33984+M)}function tt(T,M){const q=i.get(T);if(T.version>0&&q.__version!==T.version){Ct(q,T,M);return}e.bindTexture(34067,q.__webglTexture,33984+M)}const it={[fo]:10497,[Ye]:33071,[mo]:33648},mt={[Ee]:9728,[ka]:9984,[Ls]:9986,[He]:9729,[Gd]:9985,[sr]:9987};function Q(T,M,q){if(q?(c.texParameteri(T,10242,it[M.wrapS]),c.texParameteri(T,10243,it[M.wrapT]),(T===32879||T===35866)&&c.texParameteri(T,32882,it[M.wrapR]),c.texParameteri(T,10240,mt[M.magFilter]),c.texParameteri(T,10241,mt[M.minFilter])):(c.texParameteri(T,10242,33071),c.texParameteri(T,10243,33071),(T===32879||T===35866)&&c.texParameteri(T,32882,33071),(M.wrapS!==Ye||M.wrapT!==Ye)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(T,10240,O(M.magFilter)),c.texParameteri(T,10241,O(M.minFilter)),M.minFilter!==Ee&&M.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const lt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ee||M.minFilter!==Ls&&M.minFilter!==sr||M.type===Wn&&t.has("OES_texture_float_linear")===!1||u===!1&&M.type===or&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(c.texParameterf(T,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ot(T,M){let q=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",Y));const lt=M.source;let ut=g.get(lt);ut===void 0&&(ut={},g.set(lt,ut));const ft=ct(M);if(ft!==T.__cacheKey){ut[ft]===void 0&&(ut[ft]={texture:c.createTexture(),usedTimes:0},h.memory.textures++,q=!0),ut[ft].usedTimes++;const At=ut[T.__cacheKey];At!==void 0&&(ut[T.__cacheKey].usedTimes--,At.usedTimes===0&&V(M)),T.__cacheKey=ft,T.__webglTexture=ut[ft].texture}return q}function _t(T,M,q){let lt=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=35866),M.isData3DTexture&&(lt=32879);const ut=Ot(T,M),ft=M.source;e.bindTexture(lt,T.__webglTexture,33984+q);const At=i.get(ft);if(ft.version!==At.__version||ut===!0){e.activeTexture(33984+q),c.pixelStorei(37440,M.flipY),c.pixelStorei(37441,M.premultiplyAlpha),c.pixelStorei(3317,M.unpackAlignment),c.pixelStorei(37443,0);const pt=P(M)&&L(M.image)===!1;let J=E(M.image,pt,!1,f);J=Ae(M,J);const wt=L(J)||u,Tt=a.convert(M.format,M.encoding);let vt=a.convert(M.type),Mt=w(M.internalFormat,Tt,vt,M.encoding,M.isVideoTexture);Q(lt,M,wt);let bt;const Gt=M.mipmaps,Zt=u&&M.isVideoTexture!==!0,re=At.__version===void 0||ut===!0,I=R(M,J,wt);if(M.isDepthTexture)Mt=6402,u?M.type===Wn?Mt=36012:M.type===Hn?Mt=33190:M.type===Ci?Mt=35056:Mt=33189:M.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===qn&&Mt===6402&&M.type!==ql&&M.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Hn,vt=a.convert(M.type)),M.format===Pi&&Mt===6402&&(Mt=34041,M.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ci,vt=a.convert(M.type))),re&&(Zt?e.texStorage2D(3553,1,Mt,J.width,J.height):e.texImage2D(3553,0,Mt,J.width,J.height,0,Tt,vt,null));else if(M.isDataTexture)if(Gt.length>0&&wt){Zt&&re&&e.texStorage2D(3553,I,Mt,Gt[0].width,Gt[0].height);for(let j=0,ot=Gt.length;j<ot;j++)bt=Gt[j],Zt?e.texSubImage2D(3553,j,0,0,bt.width,bt.height,Tt,vt,bt.data):e.texImage2D(3553,j,Mt,bt.width,bt.height,0,Tt,vt,bt.data);M.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(3553,I,Mt,J.width,J.height),e.texSubImage2D(3553,0,0,0,J.width,J.height,Tt,vt,J.data)):e.texImage2D(3553,0,Mt,J.width,J.height,0,Tt,vt,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&re&&e.texStorage3D(35866,I,Mt,Gt[0].width,Gt[0].height,J.depth);for(let j=0,ot=Gt.length;j<ot;j++)bt=Gt[j],M.format!==Ze?Tt!==null?Zt?e.compressedTexSubImage3D(35866,j,0,0,0,bt.width,bt.height,J.depth,Tt,bt.data,0,0):e.compressedTexImage3D(35866,j,Mt,bt.width,bt.height,J.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(35866,j,0,0,0,bt.width,bt.height,J.depth,Tt,vt,bt.data):e.texImage3D(35866,j,Mt,bt.width,bt.height,J.depth,0,Tt,vt,bt.data)}else{Zt&&re&&e.texStorage2D(3553,I,Mt,Gt[0].width,Gt[0].height);for(let j=0,ot=Gt.length;j<ot;j++)bt=Gt[j],M.format!==Ze?Tt!==null?Zt?e.compressedTexSubImage2D(3553,j,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(3553,j,Mt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(3553,j,0,0,bt.width,bt.height,Tt,vt,bt.data):e.texImage2D(3553,j,Mt,bt.width,bt.height,0,Tt,vt,bt.data)}else if(M.isDataArrayTexture)Zt?(re&&e.texStorage3D(35866,I,Mt,J.width,J.height,J.depth),e.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,Tt,vt,J.data)):e.texImage3D(35866,0,Mt,J.width,J.height,J.depth,0,Tt,vt,J.data);else if(M.isData3DTexture)Zt?(re&&e.texStorage3D(32879,I,Mt,J.width,J.height,J.depth),e.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,Tt,vt,J.data)):e.texImage3D(32879,0,Mt,J.width,J.height,J.depth,0,Tt,vt,J.data);else if(M.isFramebufferTexture){if(re)if(Zt)e.texStorage2D(3553,I,Mt,J.width,J.height);else{let j=J.width,ot=J.height;for(let ht=0;ht<I;ht++)e.texImage2D(3553,ht,Mt,j,ot,0,Tt,vt,null),j>>=1,ot>>=1}}else if(Gt.length>0&&wt){Zt&&re&&e.texStorage2D(3553,I,Mt,Gt[0].width,Gt[0].height);for(let j=0,ot=Gt.length;j<ot;j++)bt=Gt[j],Zt?e.texSubImage2D(3553,j,0,0,Tt,vt,bt):e.texImage2D(3553,j,Mt,Tt,vt,bt);M.generateMipmaps=!1}else Zt?(re&&e.texStorage2D(3553,I,Mt,J.width,J.height),e.texSubImage2D(3553,0,0,0,Tt,vt,J)):e.texImage2D(3553,0,Mt,Tt,vt,J);N(M,wt)&&F(lt),At.__version=ft.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ct(T,M,q){if(M.image.length!==6)return;const lt=Ot(T,M),ut=M.source;e.bindTexture(34067,T.__webglTexture,33984+q);const ft=i.get(ut);if(ut.version!==ft.__version||lt===!0){e.activeTexture(33984+q),c.pixelStorei(37440,M.flipY),c.pixelStorei(37441,M.premultiplyAlpha),c.pixelStorei(3317,M.unpackAlignment),c.pixelStorei(37443,0);const At=M.isCompressedTexture||M.image[0].isCompressedTexture,pt=M.image[0]&&M.image[0].isDataTexture,J=[];for(let j=0;j<6;j++)!At&&!pt?J[j]=E(M.image[j],!1,!0,d):J[j]=pt?M.image[j].image:M.image[j],J[j]=Ae(M,J[j]);const wt=J[0],Tt=L(wt)||u,vt=a.convert(M.format,M.encoding),Mt=a.convert(M.type),bt=w(M.internalFormat,vt,Mt,M.encoding),Gt=u&&M.isVideoTexture!==!0,Zt=ft.__version===void 0||lt===!0;let re=R(M,wt,Tt);Q(34067,M,Tt);let I;if(At){Gt&&Zt&&e.texStorage2D(34067,re,bt,wt.width,wt.height);for(let j=0;j<6;j++){I=J[j].mipmaps;for(let ot=0;ot<I.length;ot++){const ht=I[ot];M.format!==Ze?vt!==null?Gt?e.compressedTexSubImage2D(34069+j,ot,0,0,ht.width,ht.height,vt,ht.data):e.compressedTexImage2D(34069+j,ot,bt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?e.texSubImage2D(34069+j,ot,0,0,ht.width,ht.height,vt,Mt,ht.data):e.texImage2D(34069+j,ot,bt,ht.width,ht.height,0,vt,Mt,ht.data)}}}else{I=M.mipmaps,Gt&&Zt&&(I.length>0&&re++,e.texStorage2D(34067,re,bt,J[0].width,J[0].height));for(let j=0;j<6;j++)if(pt){Gt?e.texSubImage2D(34069+j,0,0,0,J[j].width,J[j].height,vt,Mt,J[j].data):e.texImage2D(34069+j,0,bt,J[j].width,J[j].height,0,vt,Mt,J[j].data);for(let ot=0;ot<I.length;ot++){const xt=I[ot].image[j].image;Gt?e.texSubImage2D(34069+j,ot+1,0,0,xt.width,xt.height,vt,Mt,xt.data):e.texImage2D(34069+j,ot+1,bt,xt.width,xt.height,0,vt,Mt,xt.data)}}else{Gt?e.texSubImage2D(34069+j,0,0,0,vt,Mt,J[j]):e.texImage2D(34069+j,0,bt,vt,Mt,J[j]);for(let ot=0;ot<I.length;ot++){const ht=I[ot];Gt?e.texSubImage2D(34069+j,ot+1,0,0,vt,Mt,ht.image[j]):e.texImage2D(34069+j,ot+1,bt,vt,Mt,ht.image[j])}}}N(M,Tt)&&F(34067),ft.__version=ut.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function gt(T,M,q,lt,ut){const ft=a.convert(q.format,q.encoding),At=a.convert(q.type),pt=w(q.internalFormat,ft,At,q.encoding);i.get(M).__hasExternalTextures||(ut===32879||ut===35866?e.texImage3D(ut,0,pt,M.width,M.height,M.depth,0,ft,At,null):e.texImage2D(ut,0,pt,M.width,M.height,0,ft,At,null)),e.bindFramebuffer(36160,T),jt(M)?_.framebufferTexture2DMultisampleEXT(36160,lt,ut,i.get(q).__webglTexture,0,te(M)):(ut===3553||ut>=34069&&ut<=34074)&&c.framebufferTexture2D(36160,lt,ut,i.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ht(T,M,q){if(c.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let lt=33189;if(q||jt(M)){const ut=M.depthTexture;ut&&ut.isDepthTexture&&(ut.type===Wn?lt=36012:ut.type===Hn&&(lt=33190));const ft=te(M);jt(M)?_.renderbufferStorageMultisampleEXT(36161,ft,lt,M.width,M.height):c.renderbufferStorageMultisample(36161,ft,lt,M.width,M.height)}else c.renderbufferStorage(36161,lt,M.width,M.height);c.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const lt=te(M);q&&jt(M)===!1?c.renderbufferStorageMultisample(36161,lt,35056,M.width,M.height):jt(M)?_.renderbufferStorageMultisampleEXT(36161,lt,35056,M.width,M.height):c.renderbufferStorage(36161,34041,M.width,M.height),c.framebufferRenderbuffer(36160,33306,36161,T)}else{const lt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ut=0;ut<lt.length;ut++){const ft=lt[ut],At=a.convert(ft.format,ft.encoding),pt=a.convert(ft.type),J=w(ft.internalFormat,At,pt,ft.encoding),wt=te(M);q&&jt(M)===!1?c.renderbufferStorageMultisample(36161,wt,J,M.width,M.height):jt(M)?_.renderbufferStorageMultisampleEXT(36161,wt,J,M.width,M.height):c.renderbufferStorage(36161,J,M.width,M.height)}}c.bindRenderbuffer(36161,null)}function Rt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),at(M.depthTexture,0);const lt=i.get(M.depthTexture).__webglTexture,ut=te(M);if(M.depthTexture.format===qn)jt(M)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,lt,0,ut):c.framebufferTexture2D(36160,36096,3553,lt,0);else if(M.depthTexture.format===Pi)jt(M)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,lt,0,ut):c.framebufferTexture2D(36160,33306,3553,lt,0);else throw new Error("Unknown depthTexture format")}function Et(T){const M=i.get(T),q=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,T)}else if(q){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(36160,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]=c.createRenderbuffer(),Ht(M.__webglDepthbuffer[lt],T,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=c.createRenderbuffer(),Ht(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function pe(T,M,q){const lt=i.get(T);M!==void 0&&gt(lt.__webglFramebuffer,T,T.texture,36064,3553),q!==void 0&&Et(T)}function fe(T){const M=T.texture,q=i.get(T),lt=i.get(M);T.addEventListener("dispose",rt),T.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=c.createTexture()),lt.__version=M.version,h.memory.textures++);const ut=T.isWebGLCubeRenderTarget===!0,ft=T.isWebGLMultipleRenderTargets===!0,At=L(T)||u;if(ut){q.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)q.__webglFramebuffer[pt]=c.createFramebuffer()}else{if(q.__webglFramebuffer=c.createFramebuffer(),ft)if(o.drawBuffers){const pt=T.texture;for(let J=0,wt=pt.length;J<wt;J++){const Tt=i.get(pt[J]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=c.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&T.samples>0&&jt(T)===!1){const pt=ft?M:[M];q.__webglMultisampledFramebuffer=c.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let J=0;J<pt.length;J++){const wt=pt[J];q.__webglColorRenderbuffer[J]=c.createRenderbuffer(),c.bindRenderbuffer(36161,q.__webglColorRenderbuffer[J]);const Tt=a.convert(wt.format,wt.encoding),vt=a.convert(wt.type),Mt=w(wt.internalFormat,Tt,vt,wt.encoding,T.isXRRenderTarget===!0),bt=te(T);c.renderbufferStorageMultisample(36161,bt,Mt,T.width,T.height),c.framebufferRenderbuffer(36160,36064+J,36161,q.__webglColorRenderbuffer[J])}c.bindRenderbuffer(36161,null),T.depthBuffer&&(q.__webglDepthRenderbuffer=c.createRenderbuffer(),Ht(q.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(ut){e.bindTexture(34067,lt.__webglTexture),Q(34067,M,At);for(let pt=0;pt<6;pt++)gt(q.__webglFramebuffer[pt],T,M,36064,34069+pt);N(M,At)&&F(34067),e.unbindTexture()}else if(ft){const pt=T.texture;for(let J=0,wt=pt.length;J<wt;J++){const Tt=pt[J],vt=i.get(Tt);e.bindTexture(3553,vt.__webglTexture),Q(3553,Tt,At),gt(q.__webglFramebuffer,T,Tt,36064+J,3553),N(Tt,At)&&F(3553)}e.unbindTexture()}else{let pt=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(u?pt=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(pt,lt.__webglTexture),Q(pt,M,At),gt(q.__webglFramebuffer,T,M,36064,pt),N(M,At)&&F(pt),e.unbindTexture()}T.depthBuffer&&Et(T)}function me(T){const M=L(T)||u,q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let lt=0,ut=q.length;lt<ut;lt++){const ft=q[lt];if(N(ft,M)){const At=T.isWebGLCubeRenderTarget?34067:3553,pt=i.get(ft).__webglTexture;e.bindTexture(At,pt),F(At),e.unbindTexture()}}}function Pe(T){if(u&&T.samples>0&&jt(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],q=T.width,lt=T.height;let ut=16384;const ft=[],At=T.stencilBuffer?33306:36096,pt=i.get(T),J=T.isWebGLMultipleRenderTargets===!0;if(J)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(36160,pt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+wt,36161,null),e.bindFramebuffer(36160,pt.__webglFramebuffer),c.framebufferTexture2D(36009,36064+wt,3553,null,0);e.bindFramebuffer(36008,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,pt.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){ft.push(36064+wt),T.depthBuffer&&ft.push(At);const Tt=pt.__ignoreDepthValues!==void 0?pt.__ignoreDepthValues:!1;if(Tt===!1&&(T.depthBuffer&&(ut|=256),T.stencilBuffer&&(ut|=1024)),J&&c.framebufferRenderbuffer(36008,36064,36161,pt.__webglColorRenderbuffer[wt]),Tt===!0&&(c.invalidateFramebuffer(36008,[At]),c.invalidateFramebuffer(36009,[At])),J){const vt=i.get(M[wt]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,vt,0)}c.blitFramebuffer(0,0,q,lt,0,0,q,lt,ut,9728),b&&c.invalidateFramebuffer(36008,ft)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),J)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(36160,pt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+wt,36161,pt.__webglColorRenderbuffer[wt]);const Tt=i.get(M[wt]).__webglTexture;e.bindFramebuffer(36160,pt.__webglFramebuffer),c.framebufferTexture2D(36009,36064+wt,3553,Tt,0)}e.bindFramebuffer(36009,pt.__webglMultisampledFramebuffer)}}function te(T){return Math.min(m,T.samples)}function jt(T){const M=i.get(T);return u&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ue(T){const M=h.render.frame;y.get(T)!==M&&(y.set(T,M),T.update())}function Ae(T,M){const q=T.encoding,lt=T.format,ut=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===go||q!==Kn&&(q===Qt?u===!1?t.has("EXT_sRGB")===!0&&lt===Ze?(T.format=go,T.minFilter=He,T.generateMipmaps=!1):M=Kl.sRGBToLinear(M):(lt!==Ze||ut!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),M}this.allocateTextureUnit=et,this.resetTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=tt,this.rebindTextures=pe,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=jt}function nv(c,t,e){const i=e.isWebGL2;function o(a,h=null){let u;if(a===$n)return 5121;if(a===jd)return 32819;if(a===Xd)return 32820;if(a===Hd)return 5120;if(a===Wd)return 5122;if(a===ql)return 5123;if(a===qd)return 5124;if(a===Hn)return 5125;if(a===Wn)return 5126;if(a===or)return i?5131:(u=t.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(a===$d)return 6406;if(a===Ze)return 6408;if(a===Yd)return 6409;if(a===Zd)return 6410;if(a===qn)return 6402;if(a===Pi)return 34041;if(a===Kd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===go)return u=t.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(a===Jd)return 6403;if(a===Qd)return 36244;if(a===tp)return 33319;if(a===ep)return 33320;if(a===np)return 36249;if(a===Ds||a===Rs||a===Is||a===Ns)if(h===Qt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===Ds)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Rs)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Is)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ns)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===Ds)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Rs)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Is)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ns)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fa||a===Va||a===Ua||a===Oa)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Fa)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Va)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ua)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Oa)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ip)return u=t.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===za||a===Ba)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===za)return h===Qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Ba)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ga||a===Ha||a===Wa||a===qa||a===ja||a===Xa||a===$a||a===Ka||a===Ya||a===Za||a===Ja||a===Qa||a===tl||a===el)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Ga)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ha)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Wa)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qa)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ja)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xa)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$a)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ka)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ya)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Za)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ja)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Qa)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===tl)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===el)return h===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===nl)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===nl)return h===Qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Ci?i?34042:(u=t.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):c[a]!==void 0?c[a]:null}return{convert:o}}class iv extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rr extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,a=null,h=null;const u=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),S=this._getHandJoint(d,x);g!==null&&(S.matrix.fromArray(g.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=g.radius),S.visible=g!==null}const f=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=f.position.distanceTo(m.position),b=.02,y=.005;d.inputState.pinching&&_>b+y?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=b-y&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));u!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return u!==null&&(u.visible=o!==null),p!==null&&(p.visible=a!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new rr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class sv extends Ve{constructor(t,e,i,o,a,h,u,p,d,f){if(f=f!==void 0?f:qn,f!==qn&&f!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===qn&&(i=Hn),i===void 0&&f===Pi&&(i=Ci),super(null,o,a,h,u,p,f,i,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:Ee,this.minFilter=p!==void 0?p:Ee,this.flipY=!1,this.generateMipmaps=!1}}class ov extends Li{constructor(t,e){super();const i=this;let o=null,a=1,h=null,u="local-floor",p=null,d=null,f=null,m=null,_=null,b=null;const y=e.getContextAttributes();let x=null,g=null;const S=[],D=[],E=new Set,L=new Map,P=new We;P.layers.enable(1),P.viewport=new ve;const N=new We;N.layers.enable(2),N.viewport=new ve;const F=[P,N],w=new iv;w.layers.enable(1),w.layers.enable(2);let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=S[H];return $===void 0&&($=new ao,S[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=S[H];return $===void 0&&($=new ao,S[H]=$),$.getGripSpace()},this.getHand=function(H){let $=S[H];return $===void 0&&($=new ao,S[H]=$),$.getHandSpace()};function Y(H){const $=D.indexOf(H.inputSource);if($===-1)return;const tt=S[$];tt!==void 0&&tt.dispatchEvent({type:H.type,data:H.inputSource})}function rt(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",rt),o.removeEventListener("inputsourceschange",z);for(let H=0;H<S.length;H++){const $=D[H];$!==null&&(D[H]=null,S[H].disconnect($))}R=null,O=null,t.setRenderTarget(x),_=null,m=null,f=null,o=null,g=null,at.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){u=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(H){p=H},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(H){if(o=H,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",rt),o.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await e.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:o.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,e,$),o.updateRenderState({baseLayer:_}),g=new Yn(_.framebufferWidth,_.framebufferHeight,{format:Ze,type:$n,encoding:t.outputEncoding,stencilBuffer:y.stencil})}else{let $=null,tt=null,it=null;y.depth&&(it=y.stencil?35056:33190,$=y.stencil?Pi:qn,tt=y.stencil?Ci:Hn);const mt={colorFormat:32856,depthFormat:it,scaleFactor:a};f=new XRWebGLBinding(o,e),m=f.createProjectionLayer(mt),o.updateRenderState({layers:[m]}),g=new Yn(m.textureWidth,m.textureHeight,{format:Ze,type:$n,depthTexture:new sv(m.textureWidth,m.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,encoding:t.outputEncoding,samples:y.antialias?4:0});const Q=t.properties.get(g);Q.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),p=null,h=await o.requestReferenceSpace(u),at.setContext(o),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(H){for(let $=0;$<H.removed.length;$++){const tt=H.removed[$],it=D.indexOf(tt);it>=0&&(D[it]=null,S[it].disconnect(tt))}for(let $=0;$<H.added.length;$++){const tt=H.added[$];let it=D.indexOf(tt);if(it===-1){for(let Q=0;Q<S.length;Q++)if(Q>=D.length){D.push(tt),it=Q;break}else if(D[Q]===null){D[Q]=tt,it=Q;break}if(it===-1)break}const mt=S[it];mt&&mt.connect(tt)}}const V=new G,Z=new G;function nt(H,$,tt){V.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(tt.matrixWorld);const it=V.distanceTo(Z),mt=$.projectionMatrix.elements,Q=tt.projectionMatrix.elements,Ot=mt[14]/(mt[10]-1),_t=mt[14]/(mt[10]+1),Ct=(mt[9]+1)/mt[5],gt=(mt[9]-1)/mt[5],Ht=(mt[8]-1)/mt[0],Rt=(Q[8]+1)/Q[0],Et=Ot*Ht,pe=Ot*Rt,fe=it/(-Ht+Rt),me=fe*-Ht;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(me),H.translateZ(fe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Pe=Ot+fe,te=_t+fe,jt=Et-me,Ue=pe+(it-me),Ae=Ct*_t/te*Pe,T=gt*_t/te*Pe;H.projectionMatrix.makePerspective(jt,Ue,Ae,T,Pe,te)}function W(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(o===null)return;w.near=N.near=P.near=H.near,w.far=N.far=P.far=H.far,(R!==w.near||O!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,O=w.far);const $=H.parent,tt=w.cameras;W(w,$);for(let mt=0;mt<tt.length;mt++)W(tt[mt],$);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),H.matrix.copy(w.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const it=H.children;for(let mt=0,Q=it.length;mt<Q;mt++)it[mt].updateMatrixWorld(!0);tt.length===2?nt(w,P,N):w.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(_!==null)return _.fixedFoveation},this.setFoveation=function(H){m!==null&&(m.fixedFoveation=H),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=H)},this.getPlanes=function(){return E};let et=null;function ct(H,$){if(d=$.getViewerPose(p||h),b=$,d!==null){const tt=d.views;_!==null&&(t.setRenderTargetFramebuffer(g,_.framebuffer),t.setRenderTarget(g));let it=!1;tt.length!==w.cameras.length&&(w.cameras.length=0,it=!0);for(let mt=0;mt<tt.length;mt++){const Q=tt[mt];let Ot=null;if(_!==null)Ot=_.getViewport(Q);else{const Ct=f.getViewSubImage(m,Q);Ot=Ct.viewport,mt===0&&(t.setRenderTargetTextures(g,Ct.colorTexture,m.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(g))}let _t=F[mt];_t===void 0&&(_t=new We,_t.layers.enable(mt),_t.viewport=new ve,F[mt]=_t),_t.matrix.fromArray(Q.transform.matrix),_t.projectionMatrix.fromArray(Q.projectionMatrix),_t.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),mt===0&&w.matrix.copy(_t.matrix),it===!0&&w.cameras.push(_t)}}for(let tt=0;tt<S.length;tt++){const it=D[tt],mt=S[tt];it!==null&&mt!==void 0&&mt.update(it,$,p||h)}if(et&&et(H,$),$.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let tt=null;for(const it of E)$.detectedPlanes.has(it)||(tt===null&&(tt=[]),tt.push(it));if(tt!==null)for(const it of tt)E.delete(it),L.delete(it),i.dispatchEvent({type:"planeremoved",data:it});for(const it of $.detectedPlanes)if(!E.has(it))E.add(it),L.set(it,$.lastChangedTime),i.dispatchEvent({type:"planeadded",data:it});else{const mt=L.get(it);it.lastChangedTime>mt&&(L.set(it,it.lastChangedTime),i.dispatchEvent({type:"planechanged",data:it}))}}b=null}const at=new oc;at.setAnimationLoop(ct),this.setAnimationLoop=function(H){et=H},this.dispose=function(){}}}function av(c,t){function e(x,g){g.color.getRGB(x.fogColor.value,nc(c)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,S,D,E){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),f(x,g)):g.isMeshPhongMaterial?(o(x,g),d(x,g)):g.isMeshStandardMaterial?(o(x,g),m(x,g),g.isMeshPhysicalMaterial&&_(x,g,E)):g.isMeshMatcapMaterial?(o(x,g),b(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),y(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&h(x,g)):g.isPointsMaterial?u(x,g,S,D):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===qe&&(x.bumpScale.value*=-1)),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===qe&&x.normalScale.value.negate()),g.specularMap&&(x.specularMap.value=g.specularMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const S=t.get(g).envMap;if(S&&(x.envMap.value=S,x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const L=c.physicallyCorrectLights!==!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*L}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity);let D;g.map?D=g.map:g.specularMap?D=g.specularMap:g.displacementMap?D=g.displacementMap:g.normalMap?D=g.normalMap:g.bumpMap?D=g.bumpMap:g.roughnessMap?D=g.roughnessMap:g.metalnessMap?D=g.metalnessMap:g.alphaMap?D=g.alphaMap:g.emissiveMap?D=g.emissiveMap:g.clearcoatMap?D=g.clearcoatMap:g.clearcoatNormalMap?D=g.clearcoatNormalMap:g.clearcoatRoughnessMap?D=g.clearcoatRoughnessMap:g.iridescenceMap?D=g.iridescenceMap:g.iridescenceThicknessMap?D=g.iridescenceThicknessMap:g.specularIntensityMap?D=g.specularIntensityMap:g.specularColorMap?D=g.specularColorMap:g.transmissionMap?D=g.transmissionMap:g.thicknessMap?D=g.thicknessMap:g.sheenColorMap?D=g.sheenColorMap:g.sheenRoughnessMap&&(D=g.sheenRoughnessMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),x.uvTransform.value.copy(D.matrix));let E;g.aoMap?E=g.aoMap:g.lightMap&&(E=g.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),x.uv2Transform.value.copy(E.matrix))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity}function h(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function u(x,g,S,D){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*S,x.scale.value=D*.5,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let E;g.map?E=g.map:g.alphaMap&&(E=g.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),x.uvTransform.value.copy(E.matrix))}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let S;g.map?S=g.map:g.alphaMap&&(S=g.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),x.uvTransform.value.copy(S.matrix))}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.roughness.value=g.roughness,x.metalness.value=g.metalness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap),t.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function _(x,g,S){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),x.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===qe&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap)}function b(x,g){g.matcap&&(x.matcap.value=g.matcap)}function y(x,g){x.referencePosition.value.copy(g.referencePosition),x.nearDistance.value=g.nearDistance,x.farDistance.value=g.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function lv(c,t,e,i){let o={},a={},h=[];const u=e.isWebGL2?c.getParameter(35375):0;function p(D,E){const L=E.program;i.uniformBlockBinding(D,L)}function d(D,E){let L=o[D.id];L===void 0&&(y(D),L=f(D),o[D.id]=L,D.addEventListener("dispose",g));const P=E.program;i.updateUBOMapping(D,P);const N=t.render.frame;a[D.id]!==N&&(_(D),a[D.id]=N)}function f(D){const E=m();D.__bindingPointIndex=E;const L=c.createBuffer(),P=D.__size,N=D.usage;return c.bindBuffer(35345,L),c.bufferData(35345,P,N),c.bindBuffer(35345,null),c.bindBufferBase(35345,E,L),L}function m(){for(let D=0;D<u;D++)if(h.indexOf(D)===-1)return h.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const E=o[D.id],L=D.uniforms,P=D.__cache;c.bindBuffer(35345,E);for(let N=0,F=L.length;N<F;N++){const w=L[N];if(b(w,N,P)===!0){const R=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let Y=0;for(let rt=0;rt<O.length;rt++){const z=O[rt],V=x(z);typeof z=="number"?(w.__data[0]=z,c.bufferSubData(35345,R+Y,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=z.elements[0],w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=z.elements[0],w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=z.elements[0]):(z.toArray(w.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(35345,R,w.__data)}}c.bindBuffer(35345,null)}function b(D,E,L){const P=D.value;if(L[E]===void 0){if(typeof P=="number")L[E]=P;else{const N=Array.isArray(P)?P:[P],F=[];for(let w=0;w<N.length;w++)F.push(N[w].clone());L[E]=F}return!0}else if(typeof P=="number"){if(L[E]!==P)return L[E]=P,!0}else{const N=Array.isArray(L[E])?L[E]:[L[E]],F=Array.isArray(P)?P:[P];for(let w=0;w<N.length;w++){const R=N[w];if(R.equals(F[w])===!1)return R.copy(F[w]),!0}}return!1}function y(D){const E=D.uniforms;let L=0;const P=16;let N=0;for(let F=0,w=E.length;F<w;F++){const R=E[F],O={boundary:0,storage:0},Y=Array.isArray(R.value)?R.value:[R.value];for(let rt=0,z=Y.length;rt<z;rt++){const V=Y[rt],Z=x(V);O.boundary+=Z.boundary,O.storage+=Z.storage}if(R.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=L,F>0){N=L%P;const rt=P-N;N!==0&&rt-O.boundary<0&&(L+=P-N,R.__offset=L)}L+=O.storage}return N=L%P,N>0&&(L+=P-N),D.__size=L,D.__cache={},this}function x(D){const E={boundary:0,storage:0};return typeof D=="number"?(E.boundary=4,E.storage=4):D.isVector2?(E.boundary=8,E.storage=8):D.isVector3||D.isColor?(E.boundary=16,E.storage=12):D.isVector4?(E.boundary=16,E.storage=16):D.isMatrix3?(E.boundary=48,E.storage=48):D.isMatrix4?(E.boundary=64,E.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),E}function g(D){const E=D.target;E.removeEventListener("dispose",g);const L=h.indexOf(E.__bindingPointIndex);h.splice(L,1),c.deleteBuffer(o[E.id]),delete o[E.id],delete a[E.id]}function S(){for(const D in o)c.deleteBuffer(o[D]);h=[],o={},a={}}return{bind:p,update:d,dispose:S}}function cv(){const c=Kr("canvas");return c.style.display="block",c}function hc(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:cv(),e=c.context!==void 0?c.context:null,i=c.depth!==void 0?c.depth:!0,o=c.stencil!==void 0?c.stencil:!0,a=c.antialias!==void 0?c.antialias:!1,h=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,u=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,p=c.powerPreference!==void 0?c.powerPreference:"default",d=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let f;e!==null?f=e.getContextAttributes().alpha:f=c.alpha!==void 0?c.alpha:!1;let m=null,_=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Kn,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const x=this;let g=!1,S=0,D=0,E=null,L=-1,P=null;const N=new ve,F=new ve;let w=null,R=t.width,O=t.height,Y=1,rt=null,z=null;const V=new ve(0,0,R,O),Z=new ve(0,0,R,O);let nt=!1;const W=new sc;let et=!1,ct=!1,at=null;const H=new xe,$=new Yt,tt=new G,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function mt(){return E===null?Y:1}let Q=e;function Ot(C,B){for(let X=0;X<C.length;X++){const U=C[X],K=t.getContext(U,B);if(K!==null)return K}return null}try{const C={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Gt,!1),Q===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),Q=Ot(B,C),Q===null)throw Ot(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _t,Ct,gt,Ht,Rt,Et,pe,fe,me,Pe,te,jt,Ue,Ae,T,M,q,lt,ut,ft,At,pt,J,wt;function Tt(){_t=new bg(Q),Ct=new pg(Q,_t,c),_t.init(Ct),pt=new nv(Q,_t,Ct),gt=new tv(Q,_t,Ct),Ht=new Mg,Rt=new z_,Et=new ev(Q,_t,gt,Rt,Ct,pt,Ht),pe=new mg(x),fe=new xg(x),me=new Lp(Q,Ct),J=new hg(Q,_t,me,Ct),Pe=new wg(Q,me,Ht,J),te=new Tg(Q,Pe,me,Ht),ut=new Eg(Q,Ct,Et),M=new fg(Rt),jt=new O_(x,pe,fe,_t,Ct,J,M),Ue=new av(x,Rt),Ae=new G_,T=new $_(_t,Ct),lt=new ug(x,pe,fe,gt,te,f,h),q=new Q_(x,te,Ct),wt=new lv(Q,Ht,Ct,gt),ft=new dg(Q,_t,Ht,Ct),At=new yg(Q,_t,Ht,Ct),Ht.programs=jt.programs,x.capabilities=Ct,x.extensions=_t,x.properties=Rt,x.renderLists=Ae,x.shadowMap=q,x.state=gt,x.info=Ht}Tt();const vt=new ov(x,Q);this.xr=vt,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(R,O,!1))},this.getSize=function(C){return C.set(R,O)},this.setSize=function(C,B,X){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=C,O=B,t.width=Math.floor(C*Y),t.height=Math.floor(B*Y),X!==!1&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(R*Y,O*Y).floor()},this.setDrawingBufferSize=function(C,B,X){R=C,O=B,Y=X,t.width=Math.floor(C*X),t.height=Math.floor(B*X),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,B,X,U){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,B,X,U),gt.viewport(N.copy(V).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,B,X,U){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,B,X,U),gt.scissor(F.copy(Z).multiplyScalar(Y).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){gt.setScissorTest(nt=C)},this.setOpaqueSort=function(C){rt=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(C=!0,B=!0,X=!0){let U=0;C&&(U|=16384),B&&(U|=256),X&&(U|=1024),Q.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Gt,!1),Ae.dispose(),T.dispose(),Rt.dispose(),pe.dispose(),fe.dispose(),te.dispose(),J.dispose(),wt.dispose(),jt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",ht),vt.removeEventListener("sessionend",xt),at&&(at.dispose(),at=null),kt.stop()};function Mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const C=Ht.autoReset,B=q.enabled,X=q.autoUpdate,U=q.needsUpdate,K=q.type;Tt(),Ht.autoReset=C,q.enabled=B,q.autoUpdate=X,q.needsUpdate=U,q.type=K}function Gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Zt(C){const B=C.target;B.removeEventListener("dispose",Zt),re(B)}function re(C){I(C),Rt.remove(C)}function I(C){const B=Rt.get(C).programs;B!==void 0&&(B.forEach(function(X){jt.releaseProgram(X)}),C.isShaderMaterial&&jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,X,U,K,St){B===null&&(B=it);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,It=ts(C,B,X,U,K);gt.setMaterial(U,Pt);let Dt=X.index,Bt=1;U.wireframe===!0&&(Dt=Pe.getWireframeAttribute(X),Bt=2);const Vt=X.drawRange,zt=X.attributes.position;let ne=Vt.start*Bt,Me=(Vt.start+Vt.count)*Bt;St!==null&&(ne=Math.max(ne,St.start*Bt),Me=Math.min(Me,(St.start+St.count)*Bt)),Dt!==null?(ne=Math.max(ne,0),Me=Math.min(Me,Dt.count)):zt!=null&&(ne=Math.max(ne,0),Me=Math.min(Me,zt.count));const je=Me-ne;if(je<0||je===1/0)return;J.setup(K,U,It,X,Dt);let Qe,$t=ft;if(Dt!==null&&(Qe=me.get(Dt),$t=At,$t.setIndex(Qe)),K.isMesh)U.wireframe===!0?(gt.setLineWidth(U.wireframeLinewidth*mt()),$t.setMode(1)):$t.setMode(4);else if(K.isLine){let Nt=U.linewidth;Nt===void 0&&(Nt=1),gt.setLineWidth(Nt*mt()),K.isLineSegments?$t.setMode(1):K.isLineLoop?$t.setMode(2):$t.setMode(3)}else K.isPoints?$t.setMode(0):K.isSprite&&$t.setMode(4);if(K.isInstancedMesh)$t.renderInstances(ne,je,K.count);else if(X.isInstancedBufferGeometry){const Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ii=Math.min(X.instanceCount,Nt);$t.renderInstances(ne,je,Ii)}else $t.render(ne,je)},this.compile=function(C,B){function X(U,K,St){U.transparent===!0&&U.side===Sr?(U.side=qe,U.needsUpdate=!0,be(U,K,St),U.side=Xn,U.needsUpdate=!0,be(U,K,St),U.side=Sr):be(U,K,St)}_=T.get(C),_.init(),y.push(_),C.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(x.physicallyCorrectLights),C.traverse(function(U){const K=U.material;if(K)if(Array.isArray(K))for(let St=0;St<K.length;St++){const Pt=K[St];X(Pt,C,U)}else X(K,C,U)}),y.pop(),_=null};let j=null;function ot(C){j&&j(C)}function ht(){kt.stop()}function xt(){kt.start()}const kt=new oc;kt.setAnimationLoop(ot),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(C){j=C,vt.setAnimationLoop(C),C===null?kt.stop():kt.start()},vt.addEventListener("sessionstart",ht),vt.addEventListener("sessionend",xt),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(B),B=vt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,B,E),_=T.get(C,y.length),_.init(),y.push(_),H.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(H),ct=this.localClippingEnabled,et=M.init(this.clippingPlanes,ct,B),m=Ae.get(C,b.length),m.init(),b.push(m),se(C,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,z),et===!0&&M.beginShadows();const X=_.state.shadowsArray;if(q.render(X,C,B),et===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(m,C),_.setupLights(x.physicallyCorrectLights),B.isArrayCamera){const U=B.cameras;for(let K=0,St=U.length;K<St;K++){const Pt=U[K];ie(m,C,Pt,Pt.viewport)}}else ie(m,C,B);E!==null&&(Et.updateMultisampleRenderTarget(E),Et.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,B),J.resetDefaultState(),L=-1,P=null,y.pop(),y.length>0?_=y[y.length-1]:_=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function se(C,B,X,U){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){U&&tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(H);const Pt=te.update(C),It=C.material;It.visible&&m.push(C,Pt,It,X,tt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ht.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ht.render.frame),!C.frustumCulled||W.intersectsObject(C))){U&&tt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(H);const Pt=te.update(C),It=C.material;if(Array.isArray(It)){const Dt=Pt.groups;for(let Bt=0,Vt=Dt.length;Bt<Vt;Bt++){const zt=Dt[Bt],ne=It[zt.materialIndex];ne&&ne.visible&&m.push(C,Pt,ne,X,tt.z,zt)}}else It.visible&&m.push(C,Pt,It,X,tt.z,null)}}const St=C.children;for(let Pt=0,It=St.length;Pt<It;Pt++)se(St[Pt],B,X,U)}function ie(C,B,X,U){const K=C.opaque,St=C.transmissive,Pt=C.transparent;_.setupLightsView(X),St.length>0&&Je(K,B,X),U&&gt.viewport(N.copy(U)),K.length>0&&Xt(K,B,X),St.length>0&&Xt(St,B,X),Pt.length>0&&Xt(Pt,B,X),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Je(C,B,X){const U=Ct.isWebGL2;at===null&&(at=new Yn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?or:$n,minFilter:sr,samples:U&&a===!0?4:0})),x.getDrawingBufferSize($),U?at.setSize($.x,$.y):at.setSize(_o($.x),_o($.y));const K=x.getRenderTarget();x.setRenderTarget(at),x.clear();const St=x.toneMapping;x.toneMapping=vn,Xt(C,B,X),x.toneMapping=St,Et.updateMultisampleRenderTarget(at),Et.updateRenderTargetMipmap(at),x.setRenderTarget(K)}function Xt(C,B,X){const U=B.isScene===!0?B.overrideMaterial:null;for(let K=0,St=C.length;K<St;K++){const Pt=C[K],It=Pt.object,Dt=Pt.geometry,Bt=U===null?Pt.material:U,Vt=Pt.group;It.layers.test(X.layers)&&De(It,B,X,Dt,Bt,Vt)}}function De(C,B,X,U,K,St){C.onBeforeRender(x,B,X,U,K,St),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(x,B,X,U,C,St),K.transparent===!0&&K.side===Sr?(K.side=qe,K.needsUpdate=!0,x.renderBufferDirect(X,B,U,K,C,St),K.side=Xn,K.needsUpdate=!0,x.renderBufferDirect(X,B,U,K,C,St),K.side=Sr):x.renderBufferDirect(X,B,U,K,C,St),C.onAfterRender(x,B,X,U,K,St)}function be(C,B,X){B.isScene!==!0&&(B=it);const U=Rt.get(C),K=_.state.lights,St=_.state.shadowsArray,Pt=K.state.version,It=jt.getParameters(C,K.state,St,B,X),Dt=jt.getProgramCacheKey(It);let Bt=U.programs;U.environment=C.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(C.isMeshStandardMaterial?fe:pe).get(C.envMap||U.environment),Bt===void 0&&(C.addEventListener("dispose",Zt),Bt=new Map,U.programs=Bt);let Vt=Bt.get(Dt);if(Vt!==void 0){if(U.currentProgram===Vt&&U.lightsStateVersion===Pt)return pr(C,It),Vt}else It.uniforms=jt.getUniforms(C),C.onBuild(X,It,x),C.onBeforeCompile(It,x),Vt=jt.acquireProgram(It,Dt),Bt.set(Dt,Vt),U.uniforms=It.uniforms;const zt=U.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=M.uniform),pr(C,It),U.needsLights=ns(C),U.lightsStateVersion=Pt,U.needsLights&&(zt.ambientLightColor.value=K.state.ambient,zt.lightProbe.value=K.state.probe,zt.directionalLights.value=K.state.directional,zt.directionalLightShadows.value=K.state.directionalShadow,zt.spotLights.value=K.state.spot,zt.spotLightShadows.value=K.state.spotShadow,zt.rectAreaLights.value=K.state.rectArea,zt.ltc_1.value=K.state.rectAreaLTC1,zt.ltc_2.value=K.state.rectAreaLTC2,zt.pointLights.value=K.state.point,zt.pointLightShadows.value=K.state.pointShadow,zt.hemisphereLights.value=K.state.hemi,zt.directionalShadowMap.value=K.state.directionalShadowMap,zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,zt.spotShadowMap.value=K.state.spotShadowMap,zt.spotLightMatrix.value=K.state.spotLightMatrix,zt.spotLightMap.value=K.state.spotLightMap,zt.pointShadowMap.value=K.state.pointShadowMap,zt.pointShadowMatrix.value=K.state.pointShadowMatrix);const ne=Vt.getUniforms(),Me=$r.seqWithValue(ne.seq,zt);return U.currentProgram=Vt,U.uniformsList=Me,Vt}function pr(C,B){const X=Rt.get(C);X.outputEncoding=B.outputEncoding,X.instancing=B.instancing,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function ts(C,B,X,U,K){B.isScene!==!0&&(B=it),Et.resetTextureUnits();const St=B.fog,Pt=U.isMeshStandardMaterial?B.environment:null,It=E===null?x.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Kn,Dt=(U.isMeshStandardMaterial?fe:pe).get(U.envMap||Pt),Bt=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!U.normalMap&&!!X.attributes.tangent,zt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,Me=!!X.morphAttributes.color,je=U.toneMapped?x.toneMapping:vn,Qe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$t=Qe!==void 0?Qe.length:0,Nt=Rt.get(U),Ii=_.state.lights;if(et===!0&&(ct===!0||C!==P)){const we=C===P&&U.id===L;M.setState(U,C,we)}let oe=!1;U.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ii.state.version||Nt.outputEncoding!==It||K.isInstancedMesh&&Nt.instancing===!1||!K.isInstancedMesh&&Nt.instancing===!0||K.isSkinnedMesh&&Nt.skinning===!1||!K.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==Dt||U.fog===!0&&Nt.fog!==St||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==M.numPlanes||Nt.numIntersection!==M.numIntersection)||Nt.vertexAlphas!==Bt||Nt.vertexTangents!==Vt||Nt.morphTargets!==zt||Nt.morphNormals!==ne||Nt.morphColors!==Me||Nt.toneMapping!==je||Ct.isWebGL2===!0&&Nt.morphTargetsCount!==$t)&&(oe=!0):(oe=!0,Nt.__version=U.version);let tn=Nt.currentProgram;oe===!0&&(tn=be(U,B,K));let Ni=!1,xn=!1,Jn=!1;const ge=tn.getUniforms(),Oe=Nt.uniforms;if(gt.useProgram(tn.program)&&(Ni=!0,xn=!0,Jn=!0),U.id!==L&&(L=U.id,xn=!0),Ni||P!==C){if(ge.setValue(Q,"projectionMatrix",C.projectionMatrix),Ct.logarithmicDepthBuffer&&ge.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),P!==C&&(P=C,xn=!0,Jn=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const we=ge.map.cameraPosition;we!==void 0&&we.setValue(Q,tt.setFromMatrixPosition(C.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ge.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||K.isSkinnedMesh)&&ge.setValue(Q,"viewMatrix",C.matrixWorldInverse)}if(K.isSkinnedMesh){ge.setOptional(Q,K,"bindMatrix"),ge.setOptional(Q,K,"bindMatrixInverse");const we=K.skeleton;we&&(Ct.floatVertexTextures?(we.boneTexture===null&&we.computeBoneTexture(),ge.setValue(Q,"boneTexture",we.boneTexture,Et),ge.setValue(Q,"boneTextureSize",we.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ki=X.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0&&Ct.isWebGL2===!0)&&ut.update(K,X,U,tn),(xn||Nt.receiveShadow!==K.receiveShadow)&&(Nt.receiveShadow=K.receiveShadow,ge.setValue(Q,"receiveShadow",K.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Oe.envMap.value=Dt,Oe.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),xn&&(ge.setValue(Q,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&es(Oe,Jn),St&&U.fog===!0&&Ue.refreshFogUniforms(Oe,St),Ue.refreshMaterialUniforms(Oe,U,Y,O,at),$r.upload(Q,Nt.uniformsList,Oe,Et)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&($r.upload(Q,Nt.uniformsList,Oe,Et),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ge.setValue(Q,"center",K.center),ge.setValue(Q,"modelViewMatrix",K.modelViewMatrix),ge.setValue(Q,"normalMatrix",K.normalMatrix),ge.setValue(Q,"modelMatrix",K.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const we=U.uniformsGroups;for(let Qn=0,is=we.length;Qn<is;Qn++)if(Ct.isWebGL2){const fr=we[Qn];wt.update(fr,tn),wt.bind(fr,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function es(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function ns(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,B,X){Rt.get(C.texture).__webglTexture=B,Rt.get(C.depthTexture).__webglTexture=X;const U=Rt.get(C);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const X=Rt.get(C);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,X=0){E=C,S=B,D=X;let U=!0,K=null,St=!1,Pt=!1;if(C){const Dt=Rt.get(C);Dt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(36160,null),U=!1):Dt.__webglFramebuffer===void 0?Et.setupRenderTarget(C):Dt.__hasExternalTextures&&Et.rebindTextures(C,Rt.get(C.texture).__webglTexture,Rt.get(C.depthTexture).__webglTexture);const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Pt=!0);const Vt=Rt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(K=Vt[B],St=!0):Ct.isWebGL2&&C.samples>0&&Et.useMultisampledRTT(C)===!1?K=Rt.get(C).__webglMultisampledFramebuffer:K=Vt,N.copy(C.viewport),F.copy(C.scissor),w=C.scissorTest}else N.copy(V).multiplyScalar(Y).floor(),F.copy(Z).multiplyScalar(Y).floor(),w=nt;if(gt.bindFramebuffer(36160,K)&&Ct.drawBuffers&&U&&gt.drawBuffers(C,K),gt.viewport(N),gt.scissor(F),gt.setScissorTest(w),St){const Dt=Rt.get(C.texture);Q.framebufferTexture2D(36160,36064,34069+B,Dt.__webglTexture,X)}else if(Pt){const Dt=Rt.get(C.texture),Bt=B||0;Q.framebufferTextureLayer(36160,36064,Dt.__webglTexture,X||0,Bt)}L=-1},this.readRenderTargetPixels=function(C,B,X,U,K,St,Pt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Rt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){gt.bindFramebuffer(36160,It);try{const Dt=C.texture,Bt=Dt.format,Vt=Dt.type;if(Bt!==Ze&&pt.convert(Bt)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Vt===or&&(_t.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Vt!==$n&&pt.convert(Vt)!==Q.getParameter(35738)&&!(Vt===Wn&&(Ct.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-U&&X>=0&&X<=C.height-K&&Q.readPixels(B,X,U,K,pt.convert(Bt),pt.convert(Vt),St)}finally{const Dt=E!==null?Rt.get(E).__webglFramebuffer:null;gt.bindFramebuffer(36160,Dt)}}},this.copyFramebufferToTexture=function(C,B,X=0){const U=Math.pow(2,-X),K=Math.floor(B.image.width*U),St=Math.floor(B.image.height*U);Et.setTexture2D(B,0),Q.copyTexSubImage2D(3553,X,0,0,C.x,C.y,K,St),gt.unbindTexture()},this.copyTextureToTexture=function(C,B,X,U=0){const K=B.image.width,St=B.image.height,Pt=pt.convert(X.format),It=pt.convert(X.type);Et.setTexture2D(X,0),Q.pixelStorei(37440,X.flipY),Q.pixelStorei(37441,X.premultiplyAlpha),Q.pixelStorei(3317,X.unpackAlignment),B.isDataTexture?Q.texSubImage2D(3553,U,C.x,C.y,K,St,Pt,It,B.image.data):B.isCompressedTexture?Q.compressedTexSubImage2D(3553,U,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Pt,B.mipmaps[0].data):Q.texSubImage2D(3553,U,C.x,C.y,Pt,It,B.image),U===0&&X.generateMipmaps&&Q.generateMipmap(3553),gt.unbindTexture()},this.copyTextureToTexture3D=function(C,B,X,U,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=C.max.x-C.min.x+1,Pt=C.max.y-C.min.y+1,It=C.max.z-C.min.z+1,Dt=pt.convert(U.format),Bt=pt.convert(U.type);let Vt;if(U.isData3DTexture)Et.setTexture3D(U,0),Vt=32879;else if(U.isDataArrayTexture)Et.setTexture2DArray(U,0),Vt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,U.flipY),Q.pixelStorei(37441,U.premultiplyAlpha),Q.pixelStorei(3317,U.unpackAlignment);const zt=Q.getParameter(3314),ne=Q.getParameter(32878),Me=Q.getParameter(3316),je=Q.getParameter(3315),Qe=Q.getParameter(32877),$t=X.isCompressedTexture?X.mipmaps[0]:X.image;Q.pixelStorei(3314,$t.width),Q.pixelStorei(32878,$t.height),Q.pixelStorei(3316,C.min.x),Q.pixelStorei(3315,C.min.y),Q.pixelStorei(32877,C.min.z),X.isDataTexture||X.isData3DTexture?Q.texSubImage3D(Vt,K,B.x,B.y,B.z,St,Pt,It,Dt,Bt,$t.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Vt,K,B.x,B.y,B.z,St,Pt,It,Dt,$t.data)):Q.texSubImage3D(Vt,K,B.x,B.y,B.z,St,Pt,It,Dt,Bt,$t),Q.pixelStorei(3314,zt),Q.pixelStorei(32878,ne),Q.pixelStorei(3316,Me),Q.pixelStorei(3315,je),Q.pixelStorei(32877,Qe),K===0&&U.generateMipmaps&&Q.generateMipmap(Vt),gt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Et.setTextureCube(C,0):C.isData3DTexture?Et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Et.setTexture2DArray(C,0):Et.setTexture2D(C,0),gt.unbindTexture()},this.resetState=function(){S=0,D=0,E=null,gt.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class uv extends hc{}uv.prototype.isWebGL1Renderer=!0;class hv extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Co extends Dn{constructor(t=1,e=1,i=1,o=32,a=1,h=!1,u=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:a,openEnded:h,thetaStart:u,thetaLength:p};const d=this;o=Math.floor(o),a=Math.floor(a);const f=[],m=[],_=[],b=[];let y=0;const x=[],g=i/2;let S=0;D(),h===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(b,2));function D(){const L=new G,P=new G;let N=0;const F=(e-t)/i;for(let w=0;w<=a;w++){const R=[],O=w/a,Y=O*(e-t)+t;for(let rt=0;rt<=o;rt++){const z=rt/o,V=z*p+u,Z=Math.sin(V),nt=Math.cos(V);P.x=Y*Z,P.y=-O*i+g,P.z=Y*nt,m.push(P.x,P.y,P.z),L.set(Z,F,nt).normalize(),_.push(L.x,L.y,L.z),b.push(z,1-O),R.push(y++)}x.push(R)}for(let w=0;w<o;w++)for(let R=0;R<a;R++){const O=x[R][w],Y=x[R+1][w],rt=x[R+1][w+1],z=x[R][w+1];f.push(O,Y,z),f.push(Y,rt,z),N+=6}d.addGroup(S,N,0),S+=N}function E(L){const P=y,N=new Yt,F=new G;let w=0;const R=L===!0?t:e,O=L===!0?1:-1;for(let rt=1;rt<=o;rt++)m.push(0,g*O,0),_.push(0,O,0),b.push(.5,.5),y++;const Y=y;for(let rt=0;rt<=o;rt++){const V=rt/o*p+u,Z=Math.cos(V),nt=Math.sin(V);F.x=R*nt,F.y=g*O,F.z=R*Z,m.push(F.x,F.y,F.z),_.push(0,O,0),N.x=Z*.5+.5,N.y=nt*.5*O+.5,b.push(N.x,N.y),y++}for(let rt=0;rt<o;rt++){const z=P+rt,V=Y+rt;L===!0?f.push(V,V+1,z):f.push(V+1,V,z),w+=3}d.addGroup(S,w,L===!0?1:2),S+=w}}static fromJSON(t){return new Co(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dc extends dr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dv extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class pv extends dv{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DefaultUp),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);var fv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yr={},mv={get exports(){return Yr},set exports(c){Yr=c}};/*! Tweakpane 3.1.1 (c) 2016 cocopon, licensed under the MIT license. */(function(c,t){(function(e,i){i(t)})(fv,function(e){class i{constructor(n){const[r,l]=n.split("-"),v=r.split(".");this.major=parseInt(v[0],10),this.minor=parseInt(v[1],10),this.patch=parseInt(v[2],10),this.prerelease=l??null}toString(){const n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class o{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class a{constructor(n){this.target=n}}class h extends a{constructor(n,r,l,v){super(n),this.value=r,this.presetKey=l,this.last=v??!0}}class u extends a{constructor(n,r,l){super(n),this.value=r,this.presetKey=l}}class p extends a{constructor(n,r){super(n),this.expanded=r}}class d extends a{constructor(n,r){super(n),this.index=r}}function f(s){return s}function m(s){return s==null}function _(s,n){if(s.length!==n.length)return!1;for(let r=0;r<s.length;r++)if(s[r]!==n[r])return!1;return!0}const b={alreadydisposed:()=>"View has been already disposed",invalidparams:s=>`Invalid parameters for '${s.name}'`,nomatchingcontroller:s=>`No matching controller for '${s.key}'`,nomatchingview:s=>`No matching view for '${JSON.stringify(s.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:s=>`Property '${s.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class y{constructor(n){var r;this.message=(r=b[n.type](n.context))!==null&&r!==void 0?r:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}static alreadyDisposed(){return new y({type:"alreadydisposed"})}static notBindable(){return new y({type:"notbindable"})}static propertyNotFound(n){return new y({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new y({type:"shouldneverhappen"})}}class x{constructor(n,r,l){this.obj_=n,this.key_=r,this.presetKey_=l??r}static isBindable(n){return!(n===null||typeof n!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,r){const l=this.read();if(!x.isBindable(l))throw y.notBindable();if(!(n in l))throw y.propertyNotFound(n);l[n]=r}}class g extends o{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,r){const l=r.bind(this);return this.controller_.valueController.emitter.on(n,()=>{l(new a(this))}),this}}class S{constructor(){this.observers_={}}on(n,r){let l=this.observers_[n];return l||(l=this.observers_[n]=[]),l.push({handler:r}),this}off(n,r){const l=this.observers_[n];return l&&(this.observers_[n]=l.filter(v=>v.handler!==r)),this}emit(n,r){const l=this.observers_[n];l&&l.forEach(v=>{v.handler(r)})}}const D="tp";function E(s){return(r,l)=>[D,"-",s,"v",r?`_${r}`:"",l?`-${l}`:""].join("")}function L(s,n){return r=>n(s(r))}function P(s){return s.rawValue}function N(s,n){s.emitter.on("change",L(P,n)),n(s.rawValue)}function F(s,n,r){N(s.value(n),r)}function w(s,n,r){r?s.classList.add(n):s.classList.remove(n)}function R(s,n){return r=>{w(s,n,r)}}function O(s,n){N(s,r=>{n.textContent=r??""})}const Y=E("btn");class rt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Y()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("button");l.classList.add(Y("b")),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const v=n.createElement("div");v.classList.add(Y("t")),O(r.props.value("title"),v),this.buttonElement.appendChild(v)}}class z{constructor(n,r){this.emitter=new S,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new rt(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class V{constructor(n,r){var l;this.constraint_=r==null?void 0:r.constraint,this.equals_=(l=r==null?void 0:r.equals)!==null&&l!==void 0?l:(v,A)=>v===A,this.emitter=new S,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const l=r??{forceEmit:!1,last:!0},v=this.constraint_?this.constraint_.constrain(n):n;this.equals_(this.rawValue_,v)&&!l.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=v,this.emitter.emit("change",{options:l,rawValue:v,sender:this}))}}class Z{constructor(n){this.emitter=new S,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const l=r??{forceEmit:!1,last:!0};this.value_===n&&!l.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:l,rawValue:this.value_,sender:this}))}}function nt(s,n){const r=n==null?void 0:n.constraint,l=n==null?void 0:n.equals;return!r&&!l?new Z(s):new V(s,n)}class W{constructor(n){this.emitter=new S,this.valMap_=n;for(const r in this.valMap_)this.valMap_[r].emitter.on("change",()=>{this.emitter.emit("change",{key:r,sender:this})})}static createCore(n){return Object.keys(n).reduce((l,v)=>Object.assign(l,{[v]:nt(n[v])}),{})}static fromObject(n){const r=this.createCore(n);return new W(r)}get(n){return this.valMap_[n].rawValue}set(n,r){this.valMap_[n].rawValue=r}value(n){return this.valMap_[n]}}function et(s,n){const l=Object.keys(n).reduce((v,A)=>{if(v===void 0)return;const k=n[A],st=k(s[A]);return st.succeeded?Object.assign(Object.assign({},v),{[A]:st.value}):void 0},{});return l}function ct(s,n){return s.reduce((r,l)=>{if(r===void 0)return;const v=n(l);if(!(!v.succeeded||v.value===void 0))return[...r,v.value]},[])}function at(s){return s===null?!1:typeof s=="object"}function H(s){return n=>r=>{if(!n&&r===void 0)return{succeeded:!1,value:void 0};if(n&&r===void 0)return{succeeded:!0,value:void 0};const l=s(r);return l!==void 0?{succeeded:!0,value:l}:{succeeded:!1,value:void 0}}}function $(s){return{custom:n=>H(n)(s),boolean:H(n=>typeof n=="boolean"?n:void 0)(s),number:H(n=>typeof n=="number"?n:void 0)(s),string:H(n=>typeof n=="string"?n:void 0)(s),function:H(n=>typeof n=="function"?n:void 0)(s),constant:n=>H(r=>r===n?n:void 0)(s),raw:H(n=>n)(s),object:n=>H(r=>{if(at(r))return et(r,n)})(s),array:n=>H(r=>{if(Array.isArray(r))return ct(r,n)})(s)}}const tt={optional:$(!0),required:$(!1)};function it(s,n){const r=tt.required.object(n)(s);return r.succeeded?r.value:void 0}function mt(s){return s&&s.parentElement&&s.parentElement.removeChild(s),null}function Q(){return["veryfirst","first","last","verylast"]}const Ot=E(""),_t={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Ct{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;const r=this.view.element;this.blade.value("positions").emitter.on("change",()=>{Q().forEach(l=>{r.classList.remove(Ot(void 0,_t[l]))}),this.blade.get("positions").forEach(l=>{r.classList.add(Ot(void 0,_t[l]))})}),this.viewProps.handleDispose(()=>{mt(r)})}get parent(){return this.parent_}}const gt="http://www.w3.org/2000/svg";function Ht(s){s.offsetHeight}function Rt(s,n){const r=s.style.transition;s.style.transition="none",n(),s.style.transition=r}function Et(s){return s.ontouchstart!==void 0}function pe(){return globalThis}function fe(){return pe().document}function me(s){const n=s.ownerDocument.defaultView;return n&&"document"in n?s.getContext("2d",{willReadFrequently:!0}):null}const Pe={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function te(s,n){const r=s.createElementNS(gt,"svg");return r.innerHTML=Pe[n],r}function jt(s,n,r){s.insertBefore(n,s.children[r])}function Ue(s){s.parentElement&&s.parentElement.removeChild(s)}function Ae(s){for(;s.children.length>0;)s.removeChild(s.children[0])}function T(s){for(;s.childNodes.length>0;)s.removeChild(s.childNodes[0])}function M(s){return s.relatedTarget?s.relatedTarget:"explicitOriginalTarget"in s?s.explicitOriginalTarget:null}const q=E("lbl");function lt(s,n){const r=s.createDocumentFragment();return n.split(`
`).map(v=>s.createTextNode(v)).forEach((v,A)=>{A>0&&r.appendChild(s.createElement("br")),r.appendChild(v)}),r}class ut{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(q()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(q("l")),F(r.props,"label",A=>{m(A)?this.element.classList.add(q(void 0,"nol")):(this.element.classList.remove(q(void 0,"nol")),T(l),l.appendChild(lt(n,A)))}),this.element.appendChild(l),this.labelElement=l;const v=n.createElement("div");v.classList.add(q("v")),this.element.appendChild(v),this.valueElement=v}}class ft extends Ct{constructor(n,r){const l=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{view:new ut(n,{props:r.props,viewProps:l}),viewProps:l})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const At={id:"button",type:"blade",accept(s){const n=tt,r=it(s,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return r?{params:r}:null},controller(s){return new ft(s.document,{blade:s.blade,props:W.fromObject({label:s.params.label}),valueController:new z(s.document,{props:W.fromObject({title:s.params.title}),viewProps:s.viewProps})})},api(s){return!(s.controller instanceof ft)||!(s.controller.valueController instanceof z)?null:new g(s.controller)}};class pt extends Ct{constructor(n){super(n),this.value=n.value}}function J(){return new W({positions:nt([],{equals:_})})}class wt extends W{constructor(n){super(n)}static create(n){const r={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},l=W.createCore(r);return new wt(l)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(n)?`${n}px`:"auto"}bindExpandedClass(n,r){const l=()=>{this.styleExpanded?n.classList.add(r):n.classList.remove(r)};F(this,"expanded",l),F(this,"temporaryExpanded",l)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Tt(s,n){let r=0;return Rt(n,()=>{s.set("expandedHeight",null),s.set("temporaryExpanded",!0),Ht(n),r=n.clientHeight,s.set("temporaryExpanded",null),Ht(n)}),r}function vt(s,n){n.style.height=s.styleHeight}function Mt(s,n){s.value("expanded").emitter.on("beforechange",()=>{s.set("completed",!1),m(s.get("expandedHeight"))&&s.set("expandedHeight",Tt(s,n)),s.set("shouldFixHeight",!0),Ht(n)}),s.emitter.on("change",()=>{vt(s,n)}),vt(s,n),n.addEventListener("transitionend",r=>{r.propertyName==="height"&&s.cleanUpTransition()})}class bt extends o{constructor(n,r){super(n),this.rackApi_=r}}function Gt(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function Zt(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function re(s,n){const r=n??{};return s.addBlade(Object.assign(Object.assign({},r),{view:"separator"}))}function I(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class j{constructor(n){this.emitter=new S,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(const r of this.allItems())if(n(r))return r;return null}includes(n){return this.cache_.has(n)}add(n,r){if(this.includes(n))throw y.shouldNeverHappen();const l=r!==void 0?r:this.items_.length;this.items_.splice(l,0,n),this.cache_.add(n);const v=this.extract_(n);v&&(v.emitter.on("add",this.onSubListAdd_),v.emitter.on("remove",this.onSubListRemove_),v.allItems().forEach(A=>{this.cache_.add(A)})),this.emitter.emit("add",{index:l,item:n,root:this,target:this})}remove(n){const r=this.items_.indexOf(n);if(r<0)return;this.items_.splice(r,1),this.cache_.delete(n);const l=this.extract_(n);l&&(l.emitter.off("add",this.onSubListAdd_),l.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:r,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class ot extends o{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new S,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){const r=n.sender.target.read();this.emitter_.emit("change",{event:new h(this,r,this.controller_.binding.target.presetKey,n.options.last)})}}class ht extends ft{constructor(n,r){super(n,r),this.binding=r.binding}}class xt extends o{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new S,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){const r=n.sender.target.read();this.emitter_.emit("update",{event:new u(this,r,this.controller_.binding.target.presetKey)})}}class kt extends ft{constructor(n,r){super(n,r),this.binding=r.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function se(s){return s instanceof Xt?s.apiSet_:s instanceof bt?s.rackApi_.apiSet_:null}function ie(s,n){const r=s.find(l=>l.controller_===n);if(!r)throw y.shouldNeverHappen();return r}function Je(s,n,r){if(!x.isBindable(s))throw y.notBindable();return new x(s,n,r)}class Xt extends o{constructor(n,r){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new S,this.apiSet_=new j(se),this.pool_=r;const l=this.controller_.rack;l.emitter.on("add",this.onRackAdd_),l.emitter.on("remove",this.onRackRemove_),l.emitter.on("inputchange",this.onRackInputChange_),l.emitter.on("monitorupdate",this.onRackMonitorUpdate_),l.children.forEach(v=>{this.setUpApi_(v)})}get children(){return this.controller_.rack.children.map(n=>ie(this.apiSet_,n))}addInput(n,r,l){const v=l??{},A=this.controller_.view.element.ownerDocument,k=this.pool_.createInput(A,Je(n,r,v.presetKey),v),st=new ot(k);return this.add(st,v.index)}addMonitor(n,r,l){const v=l??{},A=this.controller_.view.element.ownerDocument,k=this.pool_.createMonitor(A,Je(n,r),v),st=new xt(k);return this.add(st,v.index)}addFolder(n){return Zt(this,n)}addButton(n){return Gt(this,n)}addSeparator(n){return re(this,n)}addTab(n){return I(this,n)}add(n,r){this.controller_.rack.add(n.controller_,r);const l=this.apiSet_.find(v=>v.controller_===n.controller_);return l&&this.apiSet_.remove(l),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){const r=this.controller_.view.element.ownerDocument,l=this.pool_.createBlade(r,n),v=this.pool_.createBladeApi(l);return this.add(v,n.index)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}setUpApi_(n){this.apiSet_.find(l=>l.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){const r=ie(this.apiSet_,n.bladeController);this.apiSet_.remove(r)}}onRackInputChange_(n){const r=n.bladeController;if(r instanceof ht){const l=ie(this.apiSet_,r),v=r.binding;this.emitter_.emit("change",{event:new h(l,v.target.read(),v.target.presetKey,n.options.last)})}else if(r instanceof pt){const l=ie(this.apiSet_,r);this.emitter_.emit("change",{event:new h(l,r.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof kt))throw y.shouldNeverHappen();const r=ie(this.apiSet_,n.bladeController),l=n.bladeController.binding;this.emitter_.emit("update",{event:new u(r,l.target.read(),l.target.presetKey)})}}class De extends bt{constructor(n,r){super(n,new Xt(n.rackController,r)),this.emitter_=new S,this.controller_.foldable.value("expanded").emitter.on("change",l=>{this.emitter_.emit("fold",{event:new p(this,l.sender.rawValue)})}),this.rackApi_.on("change",l=>{this.emitter_.emit("change",{event:l})}),this.rackApi_.on("update",l=>{this.emitter_.emit("update",{event:l})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,r,l){return this.rackApi_.addInput(n,r,l)}addMonitor(n,r,l){return this.rackApi_.addMonitor(n,r,l)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){return this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}}class be extends Ct{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class pr{constructor(n,r){const l=E(r.viewName);this.element=n.createElement("div"),this.element.classList.add(l()),r.viewProps.bindClassModifiers(this.element)}}function ts(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof ht&&l.binding===n)return l}return null}function es(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof kt&&l.binding===n)return l}return null}function ns(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof pt&&l.value===n)return l}return null}function C(s){return s instanceof U?s.rack:s instanceof be?s.rackController.rack:null}function B(s){const n=C(s);return n?n.bcSet_:null}class X{constructor(n){var r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new S,this.blade_=n??null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new j(B),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,r){n.parent&&n.parent.remove(n),n.parent_=this,this.bcSet_.add(n,r)}remove(n){n.parent_=null,this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(r=>r instanceof n)}onSetAdd_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:r,sender:this}),!r)return;const l=n.item;if(l.viewProps.emitter.on("change",this.onChildViewPropsChange_),l.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),l.viewProps.handleDispose(this.onChildDispose_),l instanceof ht)l.binding.emitter.on("change",this.onChildInputChange_);else if(l instanceof kt)l.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(l instanceof pt)l.value.emitter.on("change",this.onChildValueChange_);else{const v=C(l);if(v){const A=v.emitter;A.on("layout",this.onDescendantLayout_),A.on("inputchange",this.onDescendantInputChange_),A.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:r,sender:this}),!r)return;const l=n.item;if(l instanceof ht)l.binding.emitter.off("change",this.onChildInputChange_);else if(l instanceof kt)l.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(l instanceof pt)l.value.emitter.off("change",this.onChildValueChange_);else{const v=C(l);if(v){const A=v.emitter;A.off("layout",this.onDescendantLayout_),A.off("inputchange",this.onDescendantInputChange_),A.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const n=this.bcSet_.items.filter(v=>!v.viewProps.get("hidden")),r=n[0],l=n[n.length-1];this.bcSet_.items.forEach(v=>{const A=[];v===r&&(A.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&A.push("veryfirst")),v===l&&(A.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&A.push("verylast")),v.blade.set("positions",A)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(r=>r.viewProps.get("disposed")).forEach(r=>{this.bcSet_.remove(r)})}onChildInputChange_(n){const r=ts(this.find(ht),n.sender);if(!r)throw y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onChildMonitorUpdate_(n){const r=es(this.find(kt),n.sender);if(!r)throw y.alreadyDisposed();this.emitter.emit("monitorupdate",{bladeController:r,sender:this})}onChildValueChange_(n){const r=ns(this.find(pt),n.sender);if(!r)throw y.alreadyDisposed();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class U extends Ct{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new pr(n,{viewName:"brk",viewProps:r.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const l=new X(r.root?void 0:r.blade);l.emitter.on("add",this.onRackAdd_),l.emitter.on("remove",this.onRackRemove_),this.rack=l,this.viewProps.handleDispose(()=>{for(let v=this.rack.children.length-1;v>=0;v--)this.rack.children[v].viewProps.set("disposed",!0)})}onRackAdd_(n){n.isRoot&&jt(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){n.isRoot&&Ue(n.bladeController.view.element)}}const K=E("cnt");class St{constructor(n,r){var l;this.className_=E((l=r.viewName)!==null&&l!==void 0?l:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),K()),r.viewProps.bindClassModifiers(this.element),this.foldable_=r.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),F(this.foldable_,"completed",R(this.element,this.className_(void 0,"cpl")));const v=n.createElement("button");v.classList.add(this.className_("b")),F(r.props,"title",yt=>{m(yt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),r.viewProps.bindDisabled(v),this.element.appendChild(v),this.buttonElement=v;const A=n.createElement("div");A.classList.add(this.className_("t")),O(r.props.value("title"),A),this.buttonElement.appendChild(A),this.titleElement=A;const k=n.createElement("div");k.classList.add(this.className_("m")),this.buttonElement.appendChild(k);const st=r.containerElement;st.classList.add(this.className_("c")),this.element.appendChild(st),this.containerElement=st}}class Pt extends be{constructor(n,r){var l;const v=wt.create((l=r.expanded)!==null&&l!==void 0?l:!0),A=new U(n,{blade:r.blade,root:r.root,viewProps:r.viewProps});super(Object.assign(Object.assign({},r),{rackController:A,view:new St(n,{containerElement:A.view.element,foldable:v,props:r.props,viewName:r.root?"rot":void 0,viewProps:r.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=r.props,this.foldable=v,Mt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const It={id:"folder",type:"blade",accept(s){const n=tt,r=it(s,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return r?{params:r}:null},controller(s){return new Pt(s.document,{blade:s.blade,expanded:s.params.expanded,props:W.fromObject({title:s.params.title}),viewProps:s.viewProps})},api(s){return s.controller instanceof Pt?new De(s.controller,s.pool):null}};class Dt extends pt{constructor(n,r){const l=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{value:r.valueController.value,view:new ut(n,{props:r.props,viewProps:l}),viewProps:l})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Bt extends o{}const Vt=E("spr");class zt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Vt()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("hr");l.classList.add(Vt("r")),this.element.appendChild(l)}}class ne extends Ct{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new zt(n,{viewProps:r.viewProps})}))}}const Me={id:"separator",type:"blade",accept(s){const r=it(s,{view:tt.required.constant("separator")});return r?{params:r}:null},controller(s){return new ne(s.document,{blade:s.blade,viewProps:s.viewProps})},api(s){return s.controller instanceof ne?new Bt(s.controller):null}},je=E("");function Qe(s,n){return R(s,je(void 0,n))}class $t extends W{constructor(n){super(n)}static create(n){var r,l;const v=n??{},A={disabled:(r=v.disabled)!==null&&r!==void 0?r:!1,disposed:!1,hidden:(l=v.hidden)!==null&&l!==void 0?l:!1},k=W.createCore(A);return new $t(k)}bindClassModifiers(n){F(this,"disabled",Qe(n,"disabled")),F(this,"hidden",Qe(n,"hidden"))}bindDisabled(n){F(this,"disabled",r=>{n.disabled=r})}bindTabIndex(n){F(this,"disabled",r=>{n.tabIndex=r?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",r=>{r&&n()})}}const Nt=E("tbi");class Ii{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Nt()),r.viewProps.bindClassModifiers(this.element),F(r.props,"selected",A=>{A?this.element.classList.add(Nt(void 0,"sel")):this.element.classList.remove(Nt(void 0,"sel"))});const l=n.createElement("button");l.classList.add(Nt("b")),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const v=n.createElement("div");v.classList.add(Nt("t")),O(r.props.value("title"),v),this.buttonElement.appendChild(v),this.titleElement=v}}class oe{constructor(n,r){this.emitter=new S,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new Ii(n,{props:r.props,viewProps:r.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class tn{constructor(n,r){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new oe(n,{props:r.itemProps,viewProps:$t.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new U(n,{blade:J(),viewProps:$t.create()}),this.props=r.props,F(this.props,"selected",l=>{this.itemController.props.set("selected",l),this.contentController.viewProps.set("hidden",!l)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Ni{constructor(n,r){this.controller_=n,this.rackApi_=r}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addInput(n,r,l){return this.rackApi_.addInput(n,r,l)}addMonitor(n,r,l){return this.rackApi_.addMonitor(n,r,l)}addBlade(n){return this.rackApi_.addBlade(n)}}class xn extends bt{constructor(n,r){super(n,new Xt(n.rackController,r)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new S,this.pageApiMap_=new Map,this.rackApi_.on("change",l=>{this.emitter_.emit("change",{event:l})}),this.rackApi_.on("update",l=>{this.emitter_.emit("update",{event:l})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(l=>{this.setUpPageApi_(l)})}get pages(){return this.controller_.pageSet.items.map(n=>{const r=this.pageApiMap_.get(n);if(!r)throw y.shouldNeverHappen();return r})}addPage(n){const r=this.controller_.view.element.ownerDocument,l=new tn(r,{itemProps:W.fromObject({selected:!1,title:n.title}),props:W.fromObject({selected:!1})});this.controller_.add(l,n.index);const v=this.pageApiMap_.get(l);if(!v)throw y.shouldNeverHappen();return v}removePage(n){this.controller_.remove(n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}setUpPageApi_(n){const r=this.rackApi_.apiSet_.find(v=>v.controller_===n.contentController);if(!r)throw y.shouldNeverHappen();const l=new Ni(n,r);this.pageApiMap_.set(n,l)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw y.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new d(this,n.rawValue)})}}const Jn=-1;class ge{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=nt(!0),this.selectedIndex=nt(Jn),this.items_=[]}add(n,r){const l=r??this.items_.length;this.items_.splice(l,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){const r=this.items_.indexOf(n);r<0||(this.items_.splice(r,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=Jn,this.empty.rawValue=!0;return}const n=this.items_.findIndex(r=>r.rawValue);n<0?(this.items_.forEach((r,l)=>{r.rawValue=l===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((r,l)=>{r.rawValue=l===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){const r=this.items_.findIndex(l=>l===n.sender);this.items_.forEach((l,v)=>{l.rawValue=v===r}),this.selectedIndex.rawValue=r}else this.keepSelection_()}}const Oe=E("tab");class ki{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Oe(),K()),r.viewProps.bindClassModifiers(this.element),N(r.empty,R(this.element,Oe(void 0,"nop")));const l=n.createElement("div");l.classList.add(Oe("i")),this.element.appendChild(l),this.itemsElement=l;const v=r.contentsElement;v.classList.add(Oe("c")),this.element.appendChild(v),this.contentsElement=v}}class we extends be{constructor(n,r){const l=new U(n,{blade:r.blade,viewProps:r.viewProps}),v=new ge;super({blade:r.blade,rackController:l,view:new ki(n,{contentsElement:l.view.element,empty:v.empty,viewProps:r.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new j(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=v}get pageSet(){return this.pageSet_}add(n,r){this.pageSet_.add(n,r)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){const r=n.item;jt(this.view.itemsElement,r.itemController.view.element,n.index),this.rackController.rack.add(r.contentController,n.index),this.tab.add(r.props.value("selected"))}onPageRemove_(n){const r=n.item;Ue(r.itemController.view.element),this.rackController.rack.remove(r.contentController),this.tab.remove(r.props.value("selected"))}}const Qn={id:"tab",type:"blade",accept(s){const n=tt,r=it(s,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!r||r.pages.length===0?null:{params:r}},controller(s){const n=new we(s.document,{blade:s.blade,viewProps:s.viewProps});return s.params.pages.forEach(r=>{const l=new tn(s.document,{itemProps:W.fromObject({selected:!1,title:r.title}),props:W.fromObject({selected:!1})});n.add(l)}),n},api(s){return s.controller instanceof we?new xn(s.controller,s.pool):null}};function is(s,n){const r=s.accept(n.params);if(!r)return null;const l=tt.optional.boolean(n.params.disabled).value,v=tt.optional.boolean(n.params.hidden).value;return s.controller({blade:J(),document:n.document,params:Object.assign(Object.assign({},r.params),{disabled:l,hidden:v}),viewProps:$t.create({disabled:l,hidden:v})})}class fr{constructor(){this.disabled=!1,this.emitter=new S}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class _c{constructor(n,r){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new S,this.interval_=r,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Fi{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((r,l)=>l.constrain(r),n)}}function en(s,n){if(s instanceof n)return s;if(s instanceof Fi){const r=s.constraints.reduce((l,v)=>l||(v instanceof n?v:null),null);if(r)return r}return null}class Vi{constructor(n){this.options=n}constrain(n){const r=this.options;return r.length===0||r.filter(v=>v.value===n).length>0?n:r[0].value}}class ti{constructor(n){this.maxValue=n.max,this.minValue=n.min}constrain(n){let r=n;return m(this.minValue)||(r=Math.max(r,this.minValue)),m(this.maxValue)||(r=Math.min(r,this.maxValue)),r}}class mr{constructor(n,r=0){this.step=n,this.origin=r}constrain(n){const r=this.origin%this.step,l=Math.round((n-r)/this.step);return r+l*this.step}}const rs=E("lst");class vc{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.props_=r.props,this.element=n.createElement("div"),this.element.classList.add(rs()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("select");l.classList.add(rs("s")),F(this.props_,"options",A=>{Ae(l),A.forEach((k,st)=>{const yt=n.createElement("option");yt.dataset.index=String(st),yt.textContent=k.text,yt.value=String(k.value),l.appendChild(yt)})}),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.selectElement=l;const v=n.createElement("div");v.classList.add(rs("m")),v.appendChild(te(n,"dropdown")),this.element.appendChild(v),r.value.emitter.on("change",this.onValueChange_),this.value_=r.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Ui{constructor(n,r){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new vc(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){const l=n.currentTarget.selectedOptions.item(0);if(!l)return;const v=Number(l.dataset.index);this.value.rawValue=this.props.get("options")[v].value}}const Eo=E("pop");class xc{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Eo()),r.viewProps.bindClassModifiers(this.element),N(r.shows,R(this.element,Eo(void 0,"v")))}}class To{constructor(n,r){this.shows=nt(!1),this.viewProps=r.viewProps,this.view=new xc(n,{shows:this.shows,viewProps:this.viewProps})}}const Po=E("txt");class bc{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Po()),r.viewProps.bindClassModifiers(this.element),this.props_=r.props,this.props_.emitter.on("change",this.onChange_);const l=n.createElement("input");l.classList.add(Po("i")),l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,r.value.emitter.on("change",this.onChange_),this.value_=r.value,this.refresh()}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class gr{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=r.parser,this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new bc(n,{props:r.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const l=n.currentTarget.value,v=this.parser_(l);m(v)||(this.value.rawValue=v),this.view.refresh()}}function wc(s){return String(s)}function Ao(s){return s==="false"?!1:!!s}function Lo(s){return wc(s)}class yc{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}const Mc={"**":(s,n)=>Math.pow(s,n),"*":(s,n)=>s*n,"/":(s,n)=>s/n,"%":(s,n)=>s%n,"+":(s,n)=>s+n,"-":(s,n)=>s-n,"<<":(s,n)=>s<<n,">>":(s,n)=>s>>n,">>>":(s,n)=>s>>>n,"&":(s,n)=>s&n,"^":(s,n)=>s^n,"|":(s,n)=>s|n};class Sc{constructor(n,r,l){this.left=r,this.operator=n,this.right=l}evaluate(){const n=Mc[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Cc={"+":s=>s,"-":s=>-s,"~":s=>~s};class Ec{constructor(n,r){this.operator=n,this.expression=r}evaluate(){const n=Cc[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ss(s){return(n,r)=>{for(let l=0;l<s.length;l++){const v=s[l](n,r);if(v!=="")return v}return""}}function Oi(s,n){var r;const l=s.substr(n).match(/^\s+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Tc(s,n){const r=s.substr(n,1);return r.match(/^[1-9]$/)?r:""}function zi(s,n){var r;const l=s.substr(n).match(/^[0-9]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Pc(s,n){const r=zi(s,n);if(r!=="")return r;const l=s.substr(n,1);if(n+=1,l!=="-"&&l!=="+")return"";const v=zi(s,n);return v===""?"":l+v}function os(s,n){const r=s.substr(n,1);if(n+=1,r.toLowerCase()!=="e")return"";const l=Pc(s,n);return l===""?"":r+l}function Do(s,n){const r=s.substr(n,1);if(r==="0")return r;const l=Tc(s,n);return n+=l.length,l===""?"":l+zi(s,n)}function Ac(s,n){const r=Do(s,n);if(n+=r.length,r==="")return"";const l=s.substr(n,1);if(n+=l.length,l!==".")return"";const v=zi(s,n);return n+=v.length,r+l+v+os(s,n)}function Lc(s,n){const r=s.substr(n,1);if(n+=r.length,r!==".")return"";const l=zi(s,n);return n+=l.length,l===""?"":r+l+os(s,n)}function Dc(s,n){const r=Do(s,n);return n+=r.length,r===""?"":r+os(s,n)}const Rc=ss([Ac,Lc,Dc]);function Ic(s,n){var r;const l=s.substr(n).match(/^[01]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Nc(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0b")return"";const l=Ic(s,n);return l===""?"":r+l}function kc(s,n){var r;const l=s.substr(n).match(/^[0-7]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Fc(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0o")return"";const l=kc(s,n);return l===""?"":r+l}function Vc(s,n){var r;const l=s.substr(n).match(/^[0-9a-f]+/i);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Uc(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0x")return"";const l=Vc(s,n);return l===""?"":r+l}const Oc=ss([Nc,Fc,Uc]),zc=ss([Oc,Rc]);function Bc(s,n){const r=zc(s,n);return n+=r.length,r===""?null:{evaluable:new yc(r),cursor:n}}function Gc(s,n){const r=s.substr(n,1);if(n+=r.length,r!=="(")return null;const l=Io(s,n);if(!l)return null;n=l.cursor,n+=Oi(s,n).length;const v=s.substr(n,1);return n+=v.length,v!==")"?null:{evaluable:l.evaluable,cursor:n}}function Hc(s,n){var r;return(r=Bc(s,n))!==null&&r!==void 0?r:Gc(s,n)}function Ro(s,n){const r=Hc(s,n);if(r)return r;const l=s.substr(n,1);if(n+=l.length,l!=="+"&&l!=="-"&&l!=="~")return null;const v=Ro(s,n);return v?(n=v.cursor,{cursor:n,evaluable:new Ec(l,v.evaluable)}):null}function Wc(s,n,r){r+=Oi(n,r).length;const l=s.filter(v=>n.startsWith(v,r))[0];return l?(r+=l.length,r+=Oi(n,r).length,{cursor:r,operator:l}):null}function qc(s,n){return(r,l)=>{const v=s(r,l);if(!v)return null;l=v.cursor;let A=v.evaluable;for(;;){const k=Wc(n,r,l);if(!k)break;l=k.cursor;const st=s(r,l);if(!st)return null;l=st.cursor,A=new Sc(k.operator,A,st.evaluable)}return A?{cursor:l,evaluable:A}:null}}const jc=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((s,n)=>qc(s,n),Ro);function Io(s,n){return n+=Oi(s,n).length,jc(s,n)}function Xc(s){const n=Io(s,0);return!n||n.cursor+Oi(s,n.cursor).length!==s.length?null:n.evaluable}function ln(s){var n;const r=Xc(s);return(n=r==null?void 0:r.evaluate())!==null&&n!==void 0?n:null}function No(s){if(typeof s=="number")return s;if(typeof s=="string"){const n=ln(s);if(!m(n))return n}return 0}function $c(s){return String(s)}function _e(s){return n=>n.toFixed(Math.max(Math.min(s,20),0))}const Kc=_e(0);function _r(s){return Kc(s)+"%"}function ko(s){return String(s)}function as(s){return s}function Fo(s,n){for(;s.length<n;)s.push(void 0)}function Yc(s){const n=[];return Fo(n,s),nt(n)}function Zc(s){const n=s.indexOf(void 0);return n<0?s:s.slice(0,n)}function Jc(s,n){const r=[...Zc(s),n];return r.length>s.length?r.splice(0,r.length-s.length):Fo(r,s.length),r}function Bi({primary:s,secondary:n,forward:r,backward:l}){let v=!1;function A(k){v||(v=!0,k(),v=!1)}s.emitter.on("change",k=>{A(()=>{n.setRawValue(r(s,n),k.options)})}),n.emitter.on("change",k=>{A(()=>{s.setRawValue(l(s,n),k.options)}),A(()=>{n.setRawValue(r(s,n),k.options)})}),A(()=>{n.setRawValue(r(s,n),{forceEmit:!1,last:!0})})}function Le(s,n){const r=s*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+r:n.downKey?-r:0}function Gi(s){return{altKey:s.altKey,downKey:s.key==="ArrowDown",shiftKey:s.shiftKey,upKey:s.key==="ArrowUp"}}function cn(s){return{altKey:s.altKey,downKey:s.key==="ArrowLeft",shiftKey:s.shiftKey,upKey:s.key==="ArrowRight"}}function Qc(s){return s==="ArrowUp"||s==="ArrowDown"}function Vo(s){return Qc(s)||s==="ArrowLeft"||s==="ArrowRight"}function ls(s,n){var r,l;const v=n.ownerDocument.defaultView,A=n.getBoundingClientRect();return{x:s.pageX-(((r=v&&v.scrollX)!==null&&r!==void 0?r:0)+A.left),y:s.pageY-(((l=v&&v.scrollY)!==null&&l!==void 0?l:0)+A.top)}}class Rn{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new S,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){const r=this.elem_.getBoundingClientRect();return{bounds:{width:r.width,height:r.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var r;n.preventDefault(),(r=n.currentTarget)===null||r===void 0||r.focus();const l=this.elem_.ownerDocument;l.addEventListener("mousemove",this.onDocumentMouseMove_),l.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(ls(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(ls(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){const r=this.elem_.ownerDocument;r.removeEventListener("mousemove",this.onDocumentMouseMove_),r.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(ls(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();const r=n.targetTouches.item(0),l=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-l.left,y:r.clientY-l.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchMove_(n){const r=n.targetTouches.item(0),l=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-l.left,y:r.clientY-l.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchEnd_(n){var r;const l=(r=n.targetTouches.item(0))!==null&&r!==void 0?r:this.lastTouch_,v=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(l?{x:l.clientX-v.left,y:l.clientY-v.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function ee(s,n,r,l,v){const A=(s-n)/(r-n);return l+A*(v-l)}function Uo(s){return String(s.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function le(s,n,r){return Math.min(Math.max(s,n),r)}function Oo(s,n){return(s%n+n)%n}const ze=E("txt");class tu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(ze(),ze(void 0,"num")),r.arrayPosition&&this.element.classList.add(ze(void 0,r.arrayPosition)),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("input");l.classList.add(ze("i")),l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=r.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(ze()),this.inputElement.classList.add(ze("i"));const v=n.createElement("div");v.classList.add(ze("k")),this.element.appendChild(v),this.knobElement=v;const A=n.createElementNS(gt,"svg");A.classList.add(ze("g")),this.knobElement.appendChild(A);const k=n.createElementNS(gt,"path");k.classList.add(ze("gb")),A.appendChild(k),this.guideBodyElem_=k;const st=n.createElementNS(gt,"path");st.classList.add(ze("gh")),A.appendChild(st),this.guideHeadElem_=st;const yt=n.createElement("div");yt.classList.add(E("tt")()),this.knobElement.appendChild(yt),this.tooltipElem_=yt,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove(ze(void 0,"drg"));return}this.element.classList.add(ze(void 0,"drg"));const r=n.rawValue/this.props_.get("draggingScale"),l=r+(r>0?-1:r<0?1:0),v=le(-l,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${l+v},0 L${l},4 L${l+v},8`,`M ${r},-1 L${r},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${r},4`);const A=this.props_.get("formatter");this.tooltipElem_.textContent=A(this.value.rawValue),this.tooltipElem_.style.left=`${r}px`}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class Hi{constructor(n,r){var l;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.parser_=r.parser,this.props=r.props,this.sliderProps_=(l=r.sliderProps)!==null&&l!==void 0?l:null,this.value=r.value,this.viewProps=r.viewProps,this.dragging_=nt(null),this.view=new tu(n,{arrayPosition:r.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const v=new Rn(this.view.knobElement);v.emitter.on("down",this.onPointerDown_),v.emitter.on("move",this.onPointerMove_),v.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var r,l;const v=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("minValue"),A=(l=this.sliderProps_)===null||l===void 0?void 0:l.get("maxValue");let k=n;return v!==void 0&&(k=Math.max(k,v)),A!==void 0&&(k=Math.min(k,A)),k}onInputChange_(n){const l=n.currentTarget.value,v=this.parser_(l);m(v)||(this.value.rawValue=this.constrainValue_(v)),this.view.refresh()}onInputKeyDown_(n){const r=Le(this.baseStep_,Gi(n));r!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+r),{forceEmit:!1,last:!1})}onInputKeyUp_(n){Le(this.baseStep_,Gi(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;const r=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+r*this.props.get("draggingScale"))}onPointerMove_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const cs=E("sld");class eu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(cs()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(cs("t")),r.viewProps.bindTabIndex(l),this.element.appendChild(l),this.trackElement=l;const v=n.createElement("div");v.classList.add(cs("k")),this.trackElement.appendChild(v),this.knobElement=v,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.update_()}update_(){const n=le(ee(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class nu{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.value=r.value,this.viewProps=r.viewProps,this.props=r.props,this.view=new eu(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){n.point&&this.value.setRawValue(ee(le(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),r)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Le(this.baseStep_,cn(n));r!==0&&this.value.setRawValue(this.value.rawValue+r,{forceEmit:!1,last:!1})}onKeyUp_(n){Le(this.baseStep_,cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const us=E("sldtxt");class iu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(us());const l=n.createElement("div");l.classList.add(us("s")),this.sliderView_=r.sliderView,l.appendChild(this.sliderView_.element),this.element.appendChild(l);const v=n.createElement("div");v.classList.add(us("t")),this.textView_=r.textView,v.appendChild(this.textView_.element),this.element.appendChild(v)}}class hs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.sliderC_=new nu(n,{baseStep:r.baseStep,props:r.sliderProps,value:r.value,viewProps:this.viewProps}),this.textC_=new Hi(n,{baseStep:r.baseStep,parser:r.parser,props:r.textProps,sliderProps:r.sliderProps,value:r.value,viewProps:r.viewProps}),this.view=new iu(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function Wi(s,n){s.write(n)}function vr(s){const n=tt;if(Array.isArray(s))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(s).value;if(typeof s=="object")return n.required.raw(s).value}function zo(s){if(s==="inline"||s==="popup")return s}function bn(s){const n=tt;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(s).value}function Bo(s){if(Array.isArray(s))return s;const n=[];return Object.keys(s).forEach(r=>{n.push({text:r,value:s[r]})}),n}function ds(s){return m(s)?null:new Vi(Bo(s))}function ps(s){const n=s?en(s,Vi):null;return n?n.options:null}function ru(s){const n=s?en(s,mr):null;return n?n.step:null}function xr(s,n){const r=s&&en(s,mr);return r?Uo(r.step):Math.max(Uo(n),2)}function ei(s){const n=ru(s);return n??1}function ni(s,n){var r;const l=s&&en(s,mr),v=Math.abs((r=l==null?void 0:l.step)!==null&&r!==void 0?r:n);return v===0?.1:Math.pow(10,Math.floor(Math.log10(v))-1)}const br=E("ckb");class su{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(br()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("label");l.classList.add(br("l")),this.element.appendChild(l);const v=n.createElement("input");v.classList.add(br("i")),v.type="checkbox",l.appendChild(v),this.inputElement=v,r.viewProps.bindDisabled(this.inputElement);const A=n.createElement("div");A.classList.add(br("w")),l.appendChild(A);const k=te(n,"check");A.appendChild(k),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class ou{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new su(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const r=n.currentTarget;this.value.rawValue=r.checked}}function au(s){const n=[],r=ds(s.options);return r&&n.push(r),new Fi(n)}const lu={id:"input-bool",type:"input",accept:(s,n)=>{if(typeof s!="boolean")return null;const l=it(n,{options:tt.optional.custom(vr)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Ao,constraint:s=>au(s.params),writer:s=>Wi},controller:s=>{var n;const r=s.document,l=s.value,v=s.constraint;return v&&en(v,Vi)?new Ui(r,{props:W.fromObject({options:(n=ps(v))!==null&&n!==void 0?n:[]}),value:l,viewProps:s.viewProps}):new ou(r,{value:l,viewProps:s.viewProps})}},In=E("col");class cu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(In()),r.foldable.bindExpandedClass(this.element,In(void 0,"expanded")),F(r.foldable,"completed",R(this.element,In(void 0,"cpl")));const l=n.createElement("div");l.classList.add(In("h")),this.element.appendChild(l);const v=n.createElement("div");v.classList.add(In("s")),l.appendChild(v),this.swatchElement=v;const A=n.createElement("div");if(A.classList.add(In("t")),l.appendChild(A),this.textElement=A,r.pickerLayout==="inline"){const k=n.createElement("div");k.classList.add(In("p")),this.element.appendChild(k),this.pickerElement=k}else this.pickerElement=null}}function uu(s,n,r){const l=le(s/255,0,1),v=le(n/255,0,1),A=le(r/255,0,1),k=Math.max(l,v,A),st=Math.min(l,v,A),yt=k-st;let Lt=0,Wt=0;const qt=(st+k)/2;return yt!==0&&(Wt=yt/(1-Math.abs(k+st-1)),l===k?Lt=(v-A)/yt:v===k?Lt=2+(A-l)/yt:Lt=4+(l-v)/yt,Lt=Lt/6+(Lt<0?1:0)),[Lt*360,Wt*100,qt*100]}function hu(s,n,r){const l=(s%360+360)%360,v=le(n/100,0,1),A=le(r/100,0,1),k=(1-Math.abs(2*A-1))*v,st=k*(1-Math.abs(l/60%2-1)),yt=A-k/2;let Lt,Wt,qt;return l>=0&&l<60?[Lt,Wt,qt]=[k,st,0]:l>=60&&l<120?[Lt,Wt,qt]=[st,k,0]:l>=120&&l<180?[Lt,Wt,qt]=[0,k,st]:l>=180&&l<240?[Lt,Wt,qt]=[0,st,k]:l>=240&&l<300?[Lt,Wt,qt]=[st,0,k]:[Lt,Wt,qt]=[k,0,st],[(Lt+yt)*255,(Wt+yt)*255,(qt+yt)*255]}function du(s,n,r){const l=le(s/255,0,1),v=le(n/255,0,1),A=le(r/255,0,1),k=Math.max(l,v,A),st=Math.min(l,v,A),yt=k-st;let Lt;yt===0?Lt=0:k===l?Lt=60*(((v-A)/yt%6+6)%6):k===v?Lt=60*((A-l)/yt+2):Lt=60*((l-v)/yt+4);const Wt=k===0?0:yt/k,qt=k;return[Lt,Wt*100,qt*100]}function Go(s,n,r){const l=Oo(s,360),v=le(n/100,0,1),A=le(r/100,0,1),k=A*v,st=k*(1-Math.abs(l/60%2-1)),yt=A-k;let Lt,Wt,qt;return l>=0&&l<60?[Lt,Wt,qt]=[k,st,0]:l>=60&&l<120?[Lt,Wt,qt]=[st,k,0]:l>=120&&l<180?[Lt,Wt,qt]=[0,k,st]:l>=180&&l<240?[Lt,Wt,qt]=[0,st,k]:l>=240&&l<300?[Lt,Wt,qt]=[st,0,k]:[Lt,Wt,qt]=[k,0,st],[(Lt+yt)*255,(Wt+yt)*255,(qt+yt)*255]}function pu(s,n,r){const l=r+n*(100-Math.abs(2*r-100))/200;return[s,l!==0?n*(100-Math.abs(2*r-100))/l:0,r+n*(100-Math.abs(2*r-100))/(2*100)]}function fu(s,n,r){const l=100-Math.abs(r*(200-n)/100-100);return[s,l!==0?n*r/l:0,r*(200-n)/(2*100)]}function Nn(s){return[s[0],s[1],s[2]]}function Ho(s,n){return[s[0],s[1],s[2],n]}const mu={hsl:{hsl:(s,n,r)=>[s,n,r],hsv:pu,rgb:hu},hsv:{hsl:fu,hsv:(s,n,r)=>[s,n,r],rgb:Go},rgb:{hsl:uu,hsv:du,rgb:(s,n,r)=>[s,n,r]}};function wr(s,n){return[n==="float"?1:s==="rgb"?255:360,n==="float"?1:s==="rgb"?255:100,n==="float"?1:s==="rgb"?255:100]}function gu(s,n,r){var l;const v=wr(n,r);return[n==="rgb"?le(s[0],0,v[0]):Oo(s[0],v[0]),le(s[1],0,v[1]),le(s[2],0,v[2]),le((l=s[3])!==null&&l!==void 0?l:1,0,1)]}function Wo(s,n,r,l){const v=wr(n,r),A=wr(n,l);return s.map((k,st)=>k/v[st]*A[st])}function _u(s,n,r){const l=Wo(s,n.mode,n.type,"int"),v=mu[n.mode][r.mode](...l);return Wo(v,r.mode,"int",r.type)}function yr(s,n){return typeof s!="object"||m(s)?!1:n in s&&typeof s[n]=="number"}class Ut{constructor(n,r,l="int"){this.mode=r,this.type=l,this.comps_=gu(n,r,l)}static black(n="int"){return new Ut([0,0,0],"rgb",n)}static fromObject(n,r="int"){const l="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new Ut(l,"rgb",r)}static toRgbaObject(n,r="int"){return n.toRgbaObject(r)}static isRgbColorObject(n){return yr(n,"r")&&yr(n,"g")&&yr(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&yr(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,r){if(n.mode!==r.mode)return!1;const l=n.comps_,v=r.comps_;for(let A=0;A<l.length;A++)if(l[A]!==v[A])return!1;return!0}getComponents(n,r="int"){return Ho(_u(Nn(this.comps_),{mode:this.mode,type:this.type},{mode:n??this.mode,type:r}),this.comps_[3])}toRgbaObject(n="int"){const r=this.getComponents("rgb",n);return{r:r[0],g:r[1],b:r[2],a:r[3]}}}const wn=E("colp");class vu{constructor(n,r){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(wn());const l=n.createElement("div");l.classList.add(wn("hsv"));const v=n.createElement("div");v.classList.add(wn("sv")),this.svPaletteView_=r.svPaletteView,v.appendChild(this.svPaletteView_.element),l.appendChild(v);const A=n.createElement("div");A.classList.add(wn("h")),this.hPaletteView_=r.hPaletteView,A.appendChild(this.hPaletteView_.element),l.appendChild(A),this.element.appendChild(l);const k=n.createElement("div");if(k.classList.add(wn("rgb")),this.textView_=r.textView,k.appendChild(this.textView_.element),this.element.appendChild(k),r.alphaViews){this.alphaViews_={palette:r.alphaViews.palette,text:r.alphaViews.text};const st=n.createElement("div");st.classList.add(wn("a"));const yt=n.createElement("div");yt.classList.add(wn("ap")),yt.appendChild(this.alphaViews_.palette.element),st.appendChild(yt);const Lt=n.createElement("div");Lt.classList.add(wn("at")),Lt.appendChild(this.alphaViews_.text.element),st.appendChild(Lt),this.element.appendChild(st)}}get allFocusableElements(){const n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(r=>r.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function xu(s){return s==="int"?"int":s==="float"?"float":void 0}function fs(s){const n=tt;return it(s,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(xu)}),expanded:n.optional.boolean,picker:n.optional.custom(zo)})}function kn(s){return s?.1:1}function Fn(s){var n;return(n=s.color)===null||n===void 0?void 0:n.type}function bu(s,n){return s.alpha===n.alpha&&s.mode===n.mode&&s.notation===n.notation&&s.type===n.type}function Be(s,n){const r=s.match(/^(.+)%$/);return Math.min(r?parseFloat(r[1])*.01*n:parseFloat(s),n)}const wu={deg:s=>s,grad:s=>s*360/400,rad:s=>s*360/(2*Math.PI),turn:s=>s*360};function qo(s){const n=s.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(s);const r=parseFloat(n[1]),l=n[2];return wu[l](r)}function jo(s){const n=s.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Be(n[1],255),Be(n[2],255),Be(n[3],255)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function Xo(s){return n=>{const r=jo(n);return r?new Ut(r,"rgb",s):null}}function $o(s){const n=s.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Be(n[1],255),Be(n[2],255),Be(n[3],255),Be(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function Ko(s){return n=>{const r=$o(n);return r?new Ut(r,"rgb",s):null}}function Yo(s){const n=s.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[qo(n[1]),Be(n[2],100),Be(n[3],100)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function Zo(s){return n=>{const r=Yo(n);return r?new Ut(r,"hsl",s):null}}function Jo(s){const n=s.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[qo(n[1]),Be(n[2],100),Be(n[3],100),Be(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function Qo(s){return n=>{const r=Jo(n);return r?new Ut(r,"hsl",s):null}}function ta(s){const n=s.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];const r=s.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}function yu(s){const n=ta(s);return n?new Ut(n,"rgb","int"):null}function ea(s){const n=s.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),ee(parseInt(n[4]+n[4],16),0,255,0,1)];const r=s.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),ee(parseInt(r[4],16),0,255,0,1)]:null}function Mu(s){const n=ea(s);return n?new Ut(n,"rgb","int"):null}function na(s){const n=s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ia(s){return n=>{const r=na(n);return r?new Ut(r,"rgb",s):null}}function ra(s){const n=s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function sa(s){return n=>{const r=ra(n);return r?new Ut(r,"rgb",s):null}}const Su=[{parser:ta,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ea,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:jo,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:$o,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Yo,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Jo,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:na,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ra,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Cu(s){return Su.reduce((n,{parser:r,result:l})=>n||(r(s)?l:null),null)}function ms(s,n="int"){const r=Cu(s);return r?r.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},r),{type:"int"}):r.notation==="func"?Object.assign(Object.assign({},r),{type:n}):null:null}const oa={int:[yu,Mu,Xo("int"),Ko("int"),Zo("int"),Qo("int"),ia("int"),sa("int")],float:[Xo("float"),Ko("float"),Zo("float"),Qo("float"),ia("float"),sa("float")]};function Eu(s){const n=oa[s];return r=>{if(typeof r!="string")return Ut.black(s);const l=n.reduce((v,A)=>v||A(r),null);return l??Ut.black(s)}}function gs(s){const n=oa[s];return r=>n.reduce((l,v)=>l||v(r),null)}function aa(s){const n=le(Math.floor(s),0,255).toString(16);return n.length===1?`0${n}`:n}function la(s,n="#"){const r=Nn(s.getComponents("rgb")).map(aa).join("");return`${n}${r}`}function _s(s,n="#"){const r=s.getComponents("rgb"),l=[r[0],r[1],r[2],r[3]*255].map(aa).join("");return`${n}${l}`}function ca(s,n){const r=_e(n==="float"?2:0);return`rgb(${Nn(s.getComponents("rgb",n)).map(v=>r(v)).join(", ")})`}function Tu(s){return n=>ca(n,s)}function Mr(s,n){const r=_e(2),l=_e(n==="float"?2:0);return`rgba(${s.getComponents("rgb",n).map((A,k)=>(k===3?r:l)(A)).join(", ")})`}function Pu(s){return n=>Mr(n,s)}function Au(s){const n=[_e(0),_r,_r];return`hsl(${Nn(s.getComponents("hsl")).map((l,v)=>n[v](l)).join(", ")})`}function Lu(s){const n=[_e(0),_r,_r,_e(2)];return`hsla(${s.getComponents("hsl").map((l,v)=>n[v](l)).join(", ")})`}function ua(s,n){const r=_e(n==="float"?2:0),l=["r","g","b"];return`{${Nn(s.getComponents("rgb",n)).map((A,k)=>`${l[k]}: ${r(A)}`).join(", ")}}`}function Du(s){return n=>ua(n,s)}function ha(s,n){const r=_e(2),l=_e(n==="float"?2:0),v=["r","g","b","a"];return`{${s.getComponents("rgb",n).map((k,st)=>{const yt=st===3?r:l;return`${v[st]}: ${yt(k)}`}).join(", ")}}`}function Ru(s){return n=>ha(n,s)}const Iu=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:la},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:_s},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Au},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:Lu},...["int","float"].reduce((s,n)=>[...s,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:Tu(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:Pu(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:Du(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:Ru(n)}],[])];function vs(s){return Iu.reduce((n,r)=>n||(bu(r.format,s)?r.stringifier:null),null)}const qi=E("apl");class Nu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(qi()),r.viewProps.bindTabIndex(this.element);const l=n.createElement("div");l.classList.add(qi("b")),this.element.appendChild(l);const v=n.createElement("div");v.classList.add(qi("c")),l.appendChild(v),this.colorElem_=v;const A=n.createElement("div");A.classList.add(qi("m")),this.element.appendChild(A),this.markerElem_=A;const k=n.createElement("div");k.classList.add(qi("p")),this.markerElem_.appendChild(k),this.previewElem_=k,this.update_()}update_(){const n=this.value.rawValue,r=n.getComponents("rgb"),l=new Ut([r[0],r[1],r[2],0],"rgb"),v=new Ut([r[0],r[1],r[2],255],"rgb"),A=["to right",Mr(l),Mr(v)];this.colorElem_.style.background=`linear-gradient(${A.join(",")})`,this.previewElem_.style.backgroundColor=Mr(n);const k=ee(r[3],0,1,0,100);this.markerElem_.style.left=`${k}%`}onValueChange_(){this.update_()}}class ku{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Nu(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=n.point.x/n.bounds.width,v=this.value.rawValue,[A,k,st]=v.getComponents("hsv");this.value.setRawValue(new Ut([A,k,st,l],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Le(kn(!0),cn(n));if(r===0)return;const l=this.value.rawValue,[v,A,k,st]=l.getComponents("hsv");this.value.setRawValue(new Ut([v,A,k,st+r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Le(kn(!0),cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ii=E("coltxt");function Fu(s){const n=s.createElement("select"),r=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(r.reduce((l,v)=>{const A=s.createElement("option");return A.textContent=v.text,A.value=v.value,l.appendChild(A),l},s.createDocumentFragment())),n}class Vu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ii());const l=n.createElement("div");l.classList.add(ii("m")),this.modeElem_=Fu(n),this.modeElem_.classList.add(ii("ms")),l.appendChild(this.modeSelectElement);const v=n.createElement("div");v.classList.add(ii("mm")),v.appendChild(te(n,"dropdown")),l.appendChild(v),this.element.appendChild(l);const A=n.createElement("div");A.classList.add(ii("w")),this.element.appendChild(A),this.textsElem_=A,this.textViews_=r.textViews,this.applyTextViews_(),N(r.colorMode,k=>{this.modeElem_.value=k})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){Ae(this.textsElem_);const n=this.element.ownerDocument;this.textViews_.forEach(r=>{const l=n.createElement("div");l.classList.add(ii("c")),l.appendChild(r.element),this.textsElem_.appendChild(l)})}}function Uu(s){return _e(s==="float"?2:0)}function Ou(s,n,r){const l=wr(s,n)[r];return new ti({min:0,max:l})}function xs(s,n,r){return new Hi(s,{arrayPosition:r===0?"fst":r===3-1?"lst":"mid",baseStep:kn(!1),parser:n.parser,props:W.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:Uu(n.colorType)}),value:nt(0,{constraint:Ou(n.colorMode,n.colorType,r)}),viewProps:n.viewProps})}class zu{constructor(n,r){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=r.colorType,this.parser_=r.parser,this.value=r.value,this.viewProps=r.viewProps,this.colorMode=nt(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new Vu(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){const r={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},l=[xs(n,r,0),xs(n,r,1),xs(n,r,2)];return l.forEach((v,A)=>{Bi({primary:this.value,secondary:v.value,forward:k=>k.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[A],backward:(k,st)=>{const yt=this.colorMode.rawValue,Lt=k.rawValue.getComponents(yt,this.colorType_);return Lt[A]=st.rawValue,new Ut(Ho(Nn(Lt),Lt[3]),yt,this.colorType_)}})}),l}onModeSelectChange_(n){const r=n.currentTarget;this.colorMode.rawValue=r.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const bs=E("hpl");class Bu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(bs()),r.viewProps.bindTabIndex(this.element);const l=n.createElement("div");l.classList.add(bs("c")),this.element.appendChild(l);const v=n.createElement("div");v.classList.add(bs("m")),this.element.appendChild(v),this.markerElem_=v,this.update_()}update_(){const n=this.value.rawValue,[r]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=ca(new Ut([r,100,100],"hsv"));const l=ee(r,0,360,0,100);this.markerElem_.style.left=`${l}%`}onValueChange_(){this.update_()}}class Gu{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Bu(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=ee(le(n.point.x,0,n.bounds.width),0,n.bounds.width,0,359),v=this.value.rawValue,[,A,k,st]=v.getComponents("hsv");this.value.setRawValue(new Ut([l,A,k,st],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=Le(kn(!1),cn(n));if(r===0)return;const l=this.value.rawValue,[v,A,k,st]=l.getComponents("hsv");this.value.setRawValue(new Ut([v+r,A,k,st],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){Le(kn(!1),cn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ws=E("svp"),da=64;class Hu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(ws()),r.viewProps.bindTabIndex(this.element);const l=n.createElement("canvas");l.height=da,l.width=da,l.classList.add(ws("c")),this.element.appendChild(l),this.canvasElement=l;const v=n.createElement("div");v.classList.add(ws("m")),this.element.appendChild(v),this.markerElem_=v,this.update_()}update_(){const n=me(this.canvasElement);if(!n)return;const l=this.value.rawValue.getComponents("hsv"),v=this.canvasElement.width,A=this.canvasElement.height,k=n.getImageData(0,0,v,A),st=k.data;for(let Wt=0;Wt<A;Wt++)for(let qt=0;qt<v;qt++){const hn=ee(qt,0,v,0,100),Xi=ee(Wt,0,A,100,0),$i=Go(l[0],hn,Xi),ai=(Wt*v+qt)*4;st[ai]=$i[0],st[ai+1]=$i[1],st[ai+2]=$i[2],st[ai+3]=255}n.putImageData(k,0,0);const yt=ee(l[1],0,100,0,100);this.markerElem_.style.left=`${yt}%`;const Lt=ee(l[2],0,100,100,0);this.markerElem_.style.top=`${Lt}%`}onValueChange_(){this.update_()}}class Wu{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Hu(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=ee(n.point.x,0,n.bounds.width,0,100),v=ee(n.point.y,0,n.bounds.height,100,0),[A,,,k]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ut([A,l,v,k],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){Vo(n.key)&&n.preventDefault();const[r,l,v,A]=this.value.rawValue.getComponents("hsv"),k=kn(!1),st=Le(k,cn(n)),yt=Le(k,Gi(n));st===0&&yt===0||this.value.setRawValue(new Ut([r,l+st,v+yt,A],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){const r=kn(!1),l=Le(r,cn(n)),v=Le(r,Gi(n));l===0&&v===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class qu{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.hPaletteC_=new Gu(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Wu(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=r.supportsAlpha?{palette:new ku(n,{value:this.value,viewProps:this.viewProps}),text:new Hi(n,{parser:ln,baseStep:.1,props:W.fromObject({draggingScale:.01,formatter:_e(2)}),value:nt(0,{constraint:new ti({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Bi({primary:this.value,secondary:this.alphaIcs_.text.value,forward:l=>l.rawValue.getComponents()[3],backward:(l,v)=>{const A=l.rawValue.getComponents();return A[3]=v.rawValue,new Ut(A,l.rawValue.mode)}}),this.textC_=new zu(n,{colorType:r.colorType,parser:ln,value:this.value,viewProps:this.viewProps}),this.view=new vu(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:r.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const ys=E("colsw");class ju{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.element=n.createElement("div"),this.element.classList.add(ys()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(ys("sw")),this.element.appendChild(l),this.swatchElem_=l;const v=n.createElement("button");v.classList.add(ys("b")),r.viewProps.bindDisabled(v),this.element.appendChild(v),this.buttonElement=v,this.update_()}update_(){const n=this.value.rawValue;this.swatchElem_.style.backgroundColor=_s(n)}onValueChange_(){this.update_()}}class Xu{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new ju(n,{value:this.value,viewProps:this.viewProps})}}class Ms{constructor(n,r){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=wt.create(r.expanded),this.swatchC_=new Xu(n,{value:this.value,viewProps:this.viewProps});const l=this.swatchC_.view.buttonElement;l.addEventListener("blur",this.onButtonBlur_),l.addEventListener("click",this.onButtonClick_),this.textC_=new gr(n,{parser:r.parser,props:W.fromObject({formatter:r.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new cu(n,{foldable:this.foldable_,pickerLayout:r.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=r.pickerLayout==="popup"?new To(n,{viewProps:this.viewProps}):null;const v=new qu(n,{colorType:r.colorType,supportsAlpha:r.supportsAlpha,value:this.value,viewProps:this.viewProps});v.view.allFocusableElements.forEach(A=>{A.addEventListener("blur",this.onPopupChildBlur_),A.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=v,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(v.view.element),Bi({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:A=>A.rawValue,backward:(A,k)=>k.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Mt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,l=n.relatedTarget;(!l||!r.contains(l))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,l=M(n);l&&r.contains(l)||l&&l===this.swatchC_.view.buttonElement&&!Et(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function $u(s,n){return Ut.isColorObject(s)?Ut.fromObject(s,n):Ut.black(n)}function Ku(s){return Nn(s.getComponents("rgb")).reduce((n,r)=>n<<8|Math.floor(r)&255,0)}function Yu(s){return s.getComponents("rgb").reduce((n,r,l)=>{const v=Math.floor(l===3?r*255:r)&255;return n<<8|v},0)>>>0}function Zu(s){return new Ut([s>>16&255,s>>8&255,s&255],"rgb")}function Ju(s){return new Ut([s>>24&255,s>>16&255,s>>8&255,ee(s&255,0,255,0,1)],"rgb")}function Qu(s){return typeof s!="number"?Ut.black():Zu(s)}function th(s){return typeof s!="number"?Ut.black():Ju(s)}function eh(s){const n=vs(s);return n?(r,l)=>{Wi(r,n(l))}:null}function nh(s){const n=s?Yu:Ku;return(r,l)=>{Wi(r,n(l))}}function ih(s,n,r){const l=n.toRgbaObject(r);s.writeProperty("r",l.r),s.writeProperty("g",l.g),s.writeProperty("b",l.b),s.writeProperty("a",l.a)}function rh(s,n,r){const l=n.toRgbaObject(r);s.writeProperty("r",l.r),s.writeProperty("g",l.g),s.writeProperty("b",l.b)}function sh(s,n){return(r,l)=>{s?ih(r,l,n):rh(r,l,n)}}function Ss(s){var n;return!!(s!=null&&s.alpha||!((n=s==null?void 0:s.color)===null||n===void 0)&&n.alpha)}function oh(s){return s?n=>_s(n,"0x"):n=>la(n,"0x")}function ah(s){return"color"in s||"view"in s&&s.view==="color"}const lh={id:"input-color-number",type:"input",accept:(s,n)=>{if(typeof s!="number"||!ah(n))return null;const r=fs(n);return r?{initialValue:s,params:r}:null},binding:{reader:s=>Ss(s.params)?th:Qu,equals:Ut.equals,writer:s=>nh(Ss(s.params))},controller:s=>{const n=Ss(s.params),r="expanded"in s.params?s.params.expanded:void 0,l="picker"in s.params?s.params.picker:void 0;return new Ms(s.document,{colorType:"int",expanded:r??!1,formatter:oh(n),parser:gs("int"),pickerLayout:l??"popup",supportsAlpha:n,value:s.value,viewProps:s.viewProps})}};function ch(s){return Ut.isRgbaColorObject(s)}function uh(s){return n=>$u(n,s)}function hh(s,n){return r=>s?ha(r,n):ua(r,n)}const dh={id:"input-color-object",type:"input",accept:(s,n)=>{if(!Ut.isColorObject(s))return null;const r=fs(n);return r?{initialValue:s,params:r}:null},binding:{reader:s=>uh(Fn(s.params)),equals:Ut.equals,writer:s=>sh(ch(s.initialValue),Fn(s.params))},controller:s=>{var n;const r=Ut.isRgbaColorObject(s.initialValue),l="expanded"in s.params?s.params.expanded:void 0,v="picker"in s.params?s.params.picker:void 0,A=(n=Fn(s.params))!==null&&n!==void 0?n:"int";return new Ms(s.document,{colorType:A,expanded:l??!1,formatter:hh(r,A),parser:gs(A),pickerLayout:v??"popup",supportsAlpha:r,value:s.value,viewProps:s.viewProps})}},ph={id:"input-color-string",type:"input",accept:(s,n)=>{if(typeof s!="string"||"view"in n&&n.view==="text")return null;const r=ms(s,Fn(n));if(!r||!vs(r))return null;const v=fs(n);return v?{initialValue:s,params:v}:null},binding:{reader:s=>{var n;return Eu((n=Fn(s.params))!==null&&n!==void 0?n:"int")},equals:Ut.equals,writer:s=>{const n=ms(s.initialValue,Fn(s.params));if(!n)throw y.shouldNeverHappen();const r=eh(n);if(!r)throw y.notBindable();return r}},controller:s=>{const n=ms(s.initialValue,Fn(s.params));if(!n)throw y.shouldNeverHappen();const r=vs(n);if(!r)throw y.shouldNeverHappen();const l="expanded"in s.params?s.params.expanded:void 0,v="picker"in s.params?s.params.picker:void 0;return new Ms(s.document,{colorType:n.type,expanded:l??!1,formatter:r,parser:gs(n.type),pickerLayout:v??"popup",supportsAlpha:n.alpha,value:s.value,viewProps:s.viewProps})}};class yn{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){const r=this.asm_.toComponents(n).map((l,v)=>{var A,k;return(k=(A=this.components[v])===null||A===void 0?void 0:A.constrain(l))!==null&&k!==void 0?k:l});return this.asm_.fromComponents(r)}}const pa=E("pndtxt");class fh{constructor(n,r){this.textViews=r.textViews,this.element=n.createElement("div"),this.element.classList.add(pa()),this.textViews.forEach(l=>{const v=n.createElement("div");v.classList.add(pa("a")),v.appendChild(l.element),this.element.appendChild(v)})}}function mh(s,n,r){return new Hi(s,{arrayPosition:r===0?"fst":r===n.axes.length-1?"lst":"mid",baseStep:n.axes[r].baseStep,parser:n.parser,props:n.axes[r].textProps,value:nt(0,{constraint:n.axes[r].constraint}),viewProps:n.viewProps})}class Cs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.acs_=r.axes.map((l,v)=>mh(n,r,v)),this.acs_.forEach((l,v)=>{Bi({primary:this.value,secondary:l.value,forward:A=>r.assembly.toComponents(A.rawValue)[v],backward:(A,k)=>{const st=r.assembly.toComponents(A.rawValue);return st[v]=k.rawValue,r.assembly.fromComponents(st)}})}),this.view=new fh(n,{textViews:this.acs_.map(l=>l.view)})}}function fa(s,n){return"step"in s&&!m(s.step)?new mr(s.step,n):null}function ma(s){return"max"in s&&!m(s.max)||"min"in s&&!m(s.min)?new ti({max:s.max,min:s.min}):null}function gh(s,n){const r=[],l=fa(s,n);l&&r.push(l);const v=ma(s);v&&r.push(v);const A=ds(s.options);return A&&r.push(A),new Fi(r)}function _h(s){const n=s?en(s,ti):null;return n?[n.minValue,n.maxValue]:[void 0,void 0]}function vh(s){const[n,r]=_h(s);return[n??0,r??100]}const xh={id:"input-number",type:"input",accept:(s,n)=>{if(typeof s!="number")return null;const r=tt,l=it(n,{format:r.optional.function,max:r.optional.number,min:r.optional.number,options:r.optional.custom(vr),step:r.optional.number});return l?{initialValue:s,params:l}:null},binding:{reader:s=>No,constraint:s=>gh(s.params,s.initialValue),writer:s=>Wi},controller:s=>{var n,r;const l=s.value,v=s.constraint;if(v&&en(v,Vi))return new Ui(s.document,{props:W.fromObject({options:(n=ps(v))!==null&&n!==void 0?n:[]}),value:l,viewProps:s.viewProps});const A=(r="format"in s.params?s.params.format:void 0)!==null&&r!==void 0?r:_e(xr(v,l.rawValue));if(v&&en(v,ti)){const[k,st]=vh(v);return new hs(s.document,{baseStep:ei(v),parser:ln,sliderProps:W.fromObject({maxValue:st,minValue:k}),textProps:W.fromObject({draggingScale:ni(v,l.rawValue),formatter:A}),value:l,viewProps:s.viewProps})}return new Hi(s.document,{baseStep:ei(v),parser:ln,props:W.fromObject({draggingScale:ni(v,l.rawValue),formatter:A}),value:l,viewProps:s.viewProps})}};class Mn{constructor(n=0,r=0){this.x=n,this.y=r}getComponents(){return[this.x,this.y]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y;return!(typeof r!="number"||typeof l!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y}toObject(){return{x:this.x,y:this.y}}}const ga={toComponents:s=>s.getComponents(),fromComponents:s=>new Mn(...s)},ri=E("p2d");class bh{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ri()),r.viewProps.bindClassModifiers(this.element),N(r.expanded,R(this.element,ri(void 0,"expanded")));const l=n.createElement("div");l.classList.add(ri("h")),this.element.appendChild(l);const v=n.createElement("button");v.classList.add(ri("b")),v.appendChild(te(n,"p2dpad")),r.viewProps.bindDisabled(v),l.appendChild(v),this.buttonElement=v;const A=n.createElement("div");if(A.classList.add(ri("t")),l.appendChild(A),this.textElement=A,r.pickerLayout==="inline"){const k=n.createElement("div");k.classList.add(ri("p")),this.element.appendChild(k),this.pickerElement=k}else this.pickerElement=null}}const Sn=E("p2dp");class wh{constructor(n,r){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=r.invertsY,this.maxValue_=r.maxValue,this.element=n.createElement("div"),this.element.classList.add(Sn()),r.layout==="popup"&&this.element.classList.add(Sn(void 0,"p"));const l=n.createElement("div");l.classList.add(Sn("p")),r.viewProps.bindTabIndex(l),this.element.appendChild(l),this.padElement=l;const v=n.createElementNS(gt,"svg");v.classList.add(Sn("g")),this.padElement.appendChild(v),this.svgElem_=v;const A=n.createElementNS(gt,"line");A.classList.add(Sn("ax")),A.setAttributeNS(null,"x1","0"),A.setAttributeNS(null,"y1","50%"),A.setAttributeNS(null,"x2","100%"),A.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(A);const k=n.createElementNS(gt,"line");k.classList.add(Sn("ax")),k.setAttributeNS(null,"x1","50%"),k.setAttributeNS(null,"y1","0"),k.setAttributeNS(null,"x2","50%"),k.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(k);const st=n.createElementNS(gt,"line");st.classList.add(Sn("l")),st.setAttributeNS(null,"x1","50%"),st.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(st),this.lineElem_=st;const yt=n.createElement("div");yt.classList.add(Sn("m")),this.padElement.appendChild(yt),this.markerElem_=yt,r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[n,r]=this.value.rawValue.getComponents(),l=this.maxValue_,v=ee(n,-l,+l,0,100),A=ee(r,-l,+l,0,100),k=this.invertsY_?100-A:A;this.lineElem_.setAttributeNS(null,"x2",`${v}%`),this.lineElem_.setAttributeNS(null,"y2",`${k}%`),this.markerElem_.style.left=`${v}%`,this.markerElem_.style.top=`${k}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function _a(s,n,r){return[Le(n[0],cn(s)),Le(n[1],Gi(s))*(r?1:-1)]}class yh{constructor(n,r){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.baseSteps_=r.baseSteps,this.maxValue_=r.maxValue,this.invertsY_=r.invertsY,this.view=new wh(n,{invertsY:this.invertsY_,layout:r.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Rn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=this.maxValue_,v=ee(n.point.x,0,n.bounds.width,-l,+l),A=ee(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-l,+l);this.value.setRawValue(new Mn(v,A),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){Vo(n.key)&&n.preventDefault();const[r,l]=_a(n,this.baseSteps_,this.invertsY_);r===0&&l===0||this.value.setRawValue(new Mn(this.value.rawValue.x+r,this.value.rawValue.y+l),{forceEmit:!1,last:!1})}onPadKeyUp_(n){const[r,l]=_a(n,this.baseSteps_,this.invertsY_);r===0&&l===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Mh{constructor(n,r){var l,v;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=wt.create(r.expanded),this.popC_=r.pickerLayout==="popup"?new To(n,{viewProps:this.viewProps}):null;const A=new yh(n,{baseSteps:[r.axes[0].baseStep,r.axes[1].baseStep],invertsY:r.invertsY,layout:r.pickerLayout,maxValue:r.maxValue,value:this.value,viewProps:this.viewProps});A.view.allFocusableElements.forEach(k=>{k.addEventListener("blur",this.onPopupChildBlur_),k.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=A,this.textC_=new Cs(n,{assembly:ga,axes:r.axes,parser:r.parser,value:this.value,viewProps:this.viewProps}),this.view=new bh(n,{expanded:this.foldable_.value("expanded"),pickerLayout:r.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(l=this.view.buttonElement)===null||l===void 0||l.addEventListener("blur",this.onPadButtonBlur_),(v=this.view.buttonElement)===null||v===void 0||v.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Bi({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:k=>k.rawValue,backward:(k,st)=>st.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Mt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,l=n.relatedTarget;(!l||!r.contains(l))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,l=M(n);l&&r.contains(l)||l&&l===this.view.buttonElement&&!Et(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}function Sh(s){return Mn.isObject(s)?new Mn(s.x,s.y):new Mn}function Ch(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y)}function un(s,n){if(!s)return;const r=[],l=fa(s,n);l&&r.push(l);const v=ma(s);return v&&r.push(v),new Fi(r)}function Eh(s,n){return new yn({assembly:ga,components:[un("x"in s?s.x:void 0,n.x),un("y"in s?s.y:void 0,n.y)]})}function va(s,n){var r,l;const v=s&&en(s,ti);if(v)return Math.max(Math.abs((r=v.minValue)!==null&&r!==void 0?r:0),Math.abs((l=v.maxValue)!==null&&l!==void 0?l:0));const A=ei(s);return Math.max(Math.abs(A)*10,Math.abs(n)*10)}function Th(s,n){const r=n instanceof yn?n.components[0]:void 0,l=n instanceof yn?n.components[1]:void 0,v=va(r,s.x),A=va(l,s.y);return Math.max(v,A)}function xa(s,n){return{baseStep:ei(n),constraint:n,textProps:W.fromObject({draggingScale:ni(n,s),formatter:_e(xr(n,s))})}}function Ph(s){if(!("y"in s))return!1;const n=s.y;return n&&"inverted"in n?!!n.inverted:!1}const Ah={id:"input-point2d",type:"input",accept:(s,n)=>{if(!Mn.isObject(s))return null;const r=tt,l=it(n,{expanded:r.optional.boolean,picker:r.optional.custom(zo),x:r.optional.custom(bn),y:r.optional.object({inverted:r.optional.boolean,max:r.optional.number,min:r.optional.number,step:r.optional.number})});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Sh,constraint:s=>Eh(s.params,s.initialValue),equals:Mn.equals,writer:s=>Ch},controller:s=>{const n=s.document,r=s.value,l=s.constraint;if(!(l instanceof yn))throw y.shouldNeverHappen();const v="expanded"in s.params?s.params.expanded:void 0,A="picker"in s.params?s.params.picker:void 0;return new Mh(n,{axes:[xa(r.rawValue.x,l.components[0]),xa(r.rawValue.y,l.components[1])],expanded:v??!1,invertsY:Ph(s.params),maxValue:Th(r.rawValue,l),parser:ln,pickerLayout:A??"popup",value:r,viewProps:s.viewProps})}};class si{constructor(n=0,r=0,l=0){this.x=n,this.y=r,this.z=l}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y,v=n.z;return!(typeof r!="number"||typeof l!="number"||typeof v!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const ba={toComponents:s=>s.getComponents(),fromComponents:s=>new si(...s)};function Lh(s){return si.isObject(s)?new si(s.x,s.y,s.z):new si}function Dh(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y),s.writeProperty("z",n.z)}function Rh(s,n){return new yn({assembly:ba,components:[un("x"in s?s.x:void 0,n.x),un("y"in s?s.y:void 0,n.y),un("z"in s?s.z:void 0,n.z)]})}function Es(s,n){return{baseStep:ei(n),constraint:n,textProps:W.fromObject({draggingScale:ni(n,s),formatter:_e(xr(n,s))})}}const Ih={id:"input-point3d",type:"input",accept:(s,n)=>{if(!si.isObject(s))return null;const r=tt,l=it(n,{x:r.optional.custom(bn),y:r.optional.custom(bn),z:r.optional.custom(bn)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Lh,constraint:s=>Rh(s.params,s.initialValue),equals:si.equals,writer:s=>Dh},controller:s=>{const n=s.value,r=s.constraint;if(!(r instanceof yn))throw y.shouldNeverHappen();return new Cs(s.document,{assembly:ba,axes:[Es(n.rawValue.x,r.components[0]),Es(n.rawValue.y,r.components[1]),Es(n.rawValue.z,r.components[2])],parser:ln,value:n,viewProps:s.viewProps})}};class oi{constructor(n=0,r=0,l=0,v=0){this.x=n,this.y=r,this.z=l,this.w=v}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y,v=n.z,A=n.w;return!(typeof r!="number"||typeof l!="number"||typeof v!="number"||typeof A!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z&&n.w===r.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const wa={toComponents:s=>s.getComponents(),fromComponents:s=>new oi(...s)};function Nh(s){return oi.isObject(s)?new oi(s.x,s.y,s.z,s.w):new oi}function kh(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y),s.writeProperty("z",n.z),s.writeProperty("w",n.w)}function Fh(s,n){return new yn({assembly:wa,components:[un("x"in s?s.x:void 0,n.x),un("y"in s?s.y:void 0,n.y),un("z"in s?s.z:void 0,n.z),un("w"in s?s.w:void 0,n.w)]})}function Vh(s,n){return{baseStep:ei(n),constraint:n,textProps:W.fromObject({draggingScale:ni(n,s),formatter:_e(xr(n,s))})}}const Uh={id:"input-point4d",type:"input",accept:(s,n)=>{if(!oi.isObject(s))return null;const r=tt,l=it(n,{x:r.optional.custom(bn),y:r.optional.custom(bn),z:r.optional.custom(bn),w:r.optional.custom(bn)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Nh,constraint:s=>Fh(s.params,s.initialValue),equals:oi.equals,writer:s=>kh},controller:s=>{const n=s.value,r=s.constraint;if(!(r instanceof yn))throw y.shouldNeverHappen();return new Cs(s.document,{assembly:wa,axes:n.rawValue.getComponents().map((l,v)=>Vh(l,r.components[v])),parser:ln,value:n,viewProps:s.viewProps})}};function Oh(s){const n=[],r=ds(s.options);return r&&n.push(r),new Fi(n)}const zh={id:"input-string",type:"input",accept:(s,n)=>{if(typeof s!="string")return null;const l=it(n,{options:tt.optional.custom(vr)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>ko,constraint:s=>Oh(s.params),writer:s=>Wi},controller:s=>{var n;const r=s.document,l=s.value,v=s.constraint;return v&&en(v,Vi)?new Ui(r,{props:W.fromObject({options:(n=ps(v))!==null&&n!==void 0?n:[]}),value:l,viewProps:s.viewProps}):new gr(r,{parser:A=>A,props:W.fromObject({formatter:as}),value:l,viewProps:s.viewProps})}},ji={monitor:{defaultInterval:200,defaultLineCount:3}},ya=E("mll");class Bh{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(ya()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("textarea");l.classList.add(ya("i")),l.style.height=`calc(var(--bld-us) * ${r.lineCount})`,l.readOnly=!0,r.viewProps.bindDisabled(l),this.element.appendChild(l),this.textareaElem_=l,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.textareaElem_,r=n.scrollTop===n.scrollHeight-n.clientHeight,l=[];this.value.rawValue.forEach(v=>{v!==void 0&&l.push(this.formatter_(v))}),n.textContent=l.join(`
`),r&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class Ts{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Bh(n,{formatter:r.formatter,lineCount:r.lineCount,value:this.value,viewProps:this.viewProps})}}const Ma=E("sgl");class Gh{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Ma()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("input");l.classList.add(Ma("i")),l.readOnly=!0,l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.value.rawValue,r=n[n.length-1];this.inputElement.value=r!==void 0?this.formatter_(r):""}onValueUpdate_(){this.update_()}}class Ps{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Gh(n,{formatter:r.formatter,value:this.value,viewProps:this.viewProps})}}const Hh={id:"monitor-bool",type:"monitor",accept:(s,n)=>{if(typeof s!="boolean")return null;const l=it(n,{lineCount:tt.optional.number});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Ao},controller:s=>{var n;return s.value.rawValue.length===1?new Ps(s.document,{formatter:Lo,value:s.value,viewProps:s.viewProps}):new Ts(s.document,{formatter:Lo,lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:ji.monitor.defaultLineCount,value:s.value,viewProps:s.viewProps})}},Cn=E("grl");class Wh{constructor(n,r){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Cn()),r.viewProps.bindClassModifiers(this.element),this.formatter_=r.formatter,this.props_=r.props,this.cursor_=r.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const l=n.createElementNS(gt,"svg");l.classList.add(Cn("g")),l.style.height=`calc(var(--bld-us) * ${r.lineCount})`,this.element.appendChild(l),this.svgElem_=l;const v=n.createElementNS(gt,"polyline");this.svgElem_.appendChild(v),this.lineElem_=v;const A=n.createElement("div");A.classList.add(Cn("t"),E("tt")()),this.element.appendChild(A),this.tooltipElem_=A,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const n=this.svgElem_.getBoundingClientRect(),r=this.value.rawValue.length-1,l=this.props_.get("minValue"),v=this.props_.get("maxValue"),A=[];this.value.rawValue.forEach((Wt,qt)=>{if(Wt===void 0)return;const hn=ee(qt,0,r,0,n.width),Xi=ee(Wt,l,v,n.height,0);A.push([hn,Xi].join(","))}),this.lineElem_.setAttributeNS(null,"points",A.join(" "));const k=this.tooltipElem_,st=this.value.rawValue[this.cursor_.rawValue];if(st===void 0){k.classList.remove(Cn("t","a"));return}const yt=ee(this.cursor_.rawValue,0,r,0,n.width),Lt=ee(st,l,v,n.height,0);k.style.left=`${yt}px`,k.style.top=`${Lt}px`,k.textContent=`${this.formatter_(st)}`,k.classList.contains(Cn("t","a"))||(k.classList.add(Cn("t","a"),Cn("t","in")),Ht(k),k.classList.remove(Cn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class qh{constructor(n,r){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=r.props,this.value=r.value,this.viewProps=r.viewProps,this.cursor_=nt(-1),this.view=new Wh(n,{cursor:this.cursor_,formatter:r.formatter,lineCount:r.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!Et(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const l=new Rn(this.view.element);l.emitter.on("down",this.onGraphPointerDown_),l.emitter.on("move",this.onGraphPointerMove_),l.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){const r=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(ee(n.offsetX,0,r.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ee(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function As(s){return"format"in s&&!m(s.format)?s.format:_e(2)}function jh(s){var n;return s.value.rawValue.length===1?new Ps(s.document,{formatter:As(s.params),value:s.value,viewProps:s.viewProps}):new Ts(s.document,{formatter:As(s.params),lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:ji.monitor.defaultLineCount,value:s.value,viewProps:s.viewProps})}function Xh(s){var n,r,l;return new qh(s.document,{formatter:As(s.params),lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:ji.monitor.defaultLineCount,props:W.fromObject({maxValue:(r="max"in s.params?s.params.max:null)!==null&&r!==void 0?r:100,minValue:(l="min"in s.params?s.params.min:null)!==null&&l!==void 0?l:0}),value:s.value,viewProps:s.viewProps})}function Sa(s){return"view"in s&&s.view==="graph"}const $h={id:"monitor-number",type:"monitor",accept:(s,n)=>{if(typeof s!="number")return null;const r=tt,l=it(n,{format:r.optional.function,lineCount:r.optional.number,max:r.optional.number,min:r.optional.number,view:r.optional.string});return l?{initialValue:s,params:l}:null},binding:{defaultBufferSize:s=>Sa(s)?64:1,reader:s=>No},controller:s=>Sa(s.params)?Xh(s):jh(s)},Kh={id:"monitor-string",type:"monitor",accept:(s,n)=>{if(typeof s!="string")return null;const r=tt,l=it(n,{lineCount:r.optional.number,multiline:r.optional.boolean});return l?{initialValue:s,params:l}:null},binding:{reader:s=>ko},controller:s=>{var n;const r=s.value;return r.rawValue.length>1||"multiline"in s.params&&s.params.multiline?new Ts(s.document,{formatter:as,lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:ji.monitor.defaultLineCount,value:r,viewProps:s.viewProps}):new Ps(s.document,{formatter:as,value:r,viewProps:s.viewProps})}};class Yh{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new S,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){const n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function Zh(s,n){const r=s.accept(n.target.read(),n.params);if(m(r))return null;const l=tt,v={target:n.target,initialValue:r.initialValue,params:r.params},A=s.binding.reader(v),k=s.binding.constraint?s.binding.constraint(v):void 0,st=nt(A(r.initialValue),{constraint:k,equals:s.binding.equals}),yt=new Yh({reader:A,target:n.target,value:st,writer:s.binding.writer(v)}),Lt=l.optional.boolean(n.params.disabled).value,Wt=l.optional.boolean(n.params.hidden).value,qt=s.controller({constraint:k,document:n.document,initialValue:r.initialValue,params:r.params,value:yt.value,viewProps:$t.create({disabled:Lt,hidden:Wt})}),hn=l.optional.string(n.params.label).value;return new ht(n.document,{binding:yt,blade:J(),props:W.fromObject({label:hn??n.target.key}),valueController:qt})}class Jh{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new S,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const n=this.target.read();if(n===void 0)return;const r=this.value.rawValue,l=this.reader_(n);this.value.rawValue=Jc(r,l),this.emitter.emit("update",{rawValue:l,sender:this})}onTick_(n){this.read()}}function Qh(s,n){return n===0?new fr:new _c(s,n??ji.monitor.defaultInterval)}function td(s,n){var r,l,v;const A=tt,k=s.accept(n.target.read(),n.params);if(m(k))return null;const st={target:n.target,initialValue:k.initialValue,params:k.params},yt=s.binding.reader(st),Lt=(l=(r=A.optional.number(n.params.bufferSize).value)!==null&&r!==void 0?r:s.binding.defaultBufferSize&&s.binding.defaultBufferSize(k.params))!==null&&l!==void 0?l:1,Wt=A.optional.number(n.params.interval).value,qt=new Jh({reader:yt,target:n.target,ticker:Qh(n.document,Wt),value:Yc(Lt)}),hn=A.optional.boolean(n.params.disabled).value,Xi=A.optional.boolean(n.params.hidden).value,$i=s.controller({document:n.document,params:k.params,value:qt.value,viewProps:$t.create({disabled:hn,hidden:Xi})}),ai=(v=A.optional.string(n.params.label).value)!==null&&v!==void 0?v:n.target.key;return new kt(n.document,{binding:qt,blade:J(),props:W.fromObject({label:ai}),valueController:$i})}class ed{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,r,l){const v=r.read();if(m(v))throw new y({context:{key:r.key},type:"nomatchingcontroller"});const A=this.pluginsMap_.inputs.reduce((k,st)=>k??Zh(st,{document:n,target:r,params:l}),null);if(A)return A;throw new y({context:{key:r.key},type:"nomatchingcontroller"})}createMonitor(n,r,l){const v=this.pluginsMap_.monitors.reduce((A,k)=>A??td(k,{document:n,params:l,target:r}),null);if(v)return v;throw new y({context:{key:r.key},type:"nomatchingcontroller"})}createBlade(n,r){const l=this.pluginsMap_.blades.reduce((v,A)=>v??is(A,{document:n,params:r}),null);if(!l)throw new y({type:"nomatchingview",context:{params:r}});return l}createBladeApi(n){if(n instanceof ht)return new ot(n);if(n instanceof kt)return new xt(n);if(n instanceof U)return new Xt(n,this);const r=this.pluginsMap_.blades.reduce((l,v)=>l??v.api({controller:n,pool:this}),null);if(!r)throw y.shouldNeverHappen();return r}}function nd(){const s=new ed;return[Ah,Ih,Uh,zh,xh,ph,dh,lh,lu,Hh,Kh,$h,At,It,Me,Qn].forEach(n=>{s.register(n)}),s}class Ca extends o{constructor(n){super(n),this.emitter_=new S,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}}class Ea extends o{constructor(n){super(n),this.emitter_=new S,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}}class Ta extends o{constructor(n){super(n),this.emitter_=new S,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,v=>{l(v.event)}),this}}const id=function(){return{id:"list",type:"blade",accept(s){const n=tt,r=it(s,{options:n.required.custom(vr),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return r?{params:r}:null},controller(s){const n=new Ui(s.document,{props:W.fromObject({options:Bo(s.params.options)}),value:nt(s.params.value),viewProps:s.viewProps});return new Dt(s.document,{blade:s.blade,props:W.fromObject({label:s.params.label}),valueController:n})},api(s){return!(s.controller instanceof Dt)||!(s.controller.valueController instanceof Ui)?null:new Ca(s.controller)}}}();function rd(s){return s.reduce((n,r)=>Object.assign(n,{[r.presetKey]:r.read()}),{})}function sd(s,n){s.forEach(r=>{const l=n[r.presetKey];l!==void 0&&r.write(l)})}class od extends De{constructor(n,r){super(n,r)}get element(){return this.controller_.view.element}importPreset(n){const r=this.controller_.rackController.rack.find(ht).map(l=>l.binding.target);sd(r,n),this.refresh()}exportPreset(){const n=this.controller_.rackController.rack.find(ht).map(r=>r.binding.target);return rd(n)}refresh(){this.controller_.rackController.rack.find(ht).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(kt).forEach(n=>{n.binding.read()})}}class ad extends Pt{constructor(n,r){super(n,{expanded:r.expanded,blade:r.blade,props:r.props,root:!0,viewProps:r.viewProps})}}const ld={id:"slider",type:"blade",accept(s){const n=tt,r=it(s,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return r?{params:r}:null},controller(s){var n,r;const l=(n=s.params.value)!==null&&n!==void 0?n:0,v=new hs(s.document,{baseStep:1,parser:ln,sliderProps:W.fromObject({maxValue:s.params.max,minValue:s.params.min}),textProps:W.fromObject({draggingScale:ni(void 0,l),formatter:(r=s.params.format)!==null&&r!==void 0?r:$c}),value:nt(l),viewProps:s.viewProps});return new Dt(s.document,{blade:s.blade,props:W.fromObject({label:s.params.label}),valueController:v})},api(s){return!(s.controller instanceof Dt)||!(s.controller.valueController instanceof hs)?null:new Ea(s.controller)}},cd=function(){return{id:"text",type:"blade",accept(s){const n=tt,r=it(s,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return r?{params:r}:null},controller(s){var n;const r=new gr(s.document,{parser:s.params.parse,props:W.fromObject({formatter:(n=s.params.format)!==null&&n!==void 0?n:l=>String(l)}),value:nt(s.params.value),viewProps:s.viewProps});return new Dt(s.document,{blade:s.blade,props:W.fromObject({label:s.params.label}),valueController:r})},api(s){return!(s.controller instanceof Dt)||!(s.controller.valueController instanceof gr)?null:new Ta(s.controller)}}}();function ud(s){const n=s.createElement("div");return n.classList.add(E("dfw")()),s.body&&s.body.appendChild(n),n}function Pa(s,n,r){if(s.querySelector(`style[data-tp-style=${n}]`))return;const l=s.createElement("style");l.dataset.tpStyle=n,l.textContent=r,s.head.appendChild(l)}class hd extends od{constructor(n){var r,l;const v=n??{},A=(r=v.document)!==null&&r!==void 0?r:fe(),k=nd(),st=new ad(A,{expanded:v.expanded,blade:J(),props:W.fromObject({title:v.title}),viewProps:$t.create()});super(st,k),this.pool_=k,this.containerElem_=(l=v.container)!==null&&l!==void 0?l:ud(A),this.containerElem_.appendChild(this.element),this.doc_=A,this.usesDefaultWrapper_=!v.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw y.alreadyDisposed();return this.doc_}dispose(){const n=this.containerElem_;if(!n)throw y.alreadyDisposed();if(this.usesDefaultWrapper_){const r=n.parentElement;r&&r.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(l=>{this.pool_.register(l),this.embedPluginStyle_(l)})}embedPluginStyle_(n){n.css&&Pa(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){Pa(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, hsl(230deg, 7%, 17%));--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, hsl(230deg, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230deg, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230deg, 7%, 75%));--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230deg, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[ld,id,Qn,cd]})}}const dd=new i("3.1.1");e.BladeApi=o,e.ButtonApi=g,e.FolderApi=De,e.InputBindingApi=ot,e.ListApi=Ca,e.MonitorBindingApi=xt,e.Pane=hd,e.SeparatorApi=Bt,e.SliderApi=Ea,e.TabApi=xn,e.TabPageApi=Ni,e.TextApi=Ta,e.TpChangeEvent=h,e.VERSION=dd,Object.defineProperty(e,"__esModule",{value:!0})})})(mv,Yr);let pc=800,fc=800;const Wr=.01,Jt={color:11513301,rows:5,columns:5,depth:3,spacing:1.8,z:10},qr=new hv,lo=new hc,xo=new We(75,pc/fc,.1,1e3),Zr=new rr,mc=[];function gv(){console.log("Application starting..."),qr.background=new Kt("lightgray"),lo.setSize(pc,fc),document.body.appendChild(lo.domElement);const c=new pv(16777215,2105376,1);qr.add(c),qr.add(Zr),_v();function t(){requestAnimationFrame(t),lo.render(qr,xo),Zr.rotation.y-=.01}t()}function jr(c){Zr.add(c),mc.push(c)}function Ol(){for(let e of mc)Zr.remove(e);const c=new Di(1,1,1),t=new dc({color:Jt.color,opacity:.9,transparent:!0});for(let e=0;e<Jt.rows;e++)for(let i=0;i<Jt.columns;i++)for(let o=0;o<Jt.depth;o++){const a=new sn(c,t);[a.position.x,a.position.y,a.position.z]=gc(i,e,o),jr(a),i<Jt.columns-1&&jr(co(i,e,o,0)),e<Jt.rows-1&&jr(co(i,e,o,1)),o<Jt.depth-1&&jr(co(i,e,o,2))}}function co(c,t,e,i){const o=gc(c,t,e),a=new Co(.25,.25,Jt.spacing-1+2*Wr,32),h=new dc({color:Jt.color,opacity:.9,transparent:!0}),u=new sn(a,h);return[u.position.x,u.position.y,u.position.z]=o,i===0&&(u.rotateZ(Math.PI/2),u.position.x+=Jt.spacing/2+Wr),i===1&&(u.position.y+=Jt.spacing/2+Wr),i===2&&(u.rotateX(Math.PI/2),u.position.z+=Jt.spacing/2+Wr),u}function gc(c,t,e){return[(c-(Jt.columns-1)/2)*Jt.spacing,(t-(Jt.rows-1)/2)*Jt.spacing,(e-(Jt.depth-1)/2)*Jt.spacing]}function _v(){const c=document.createElement("div");c.className="tweak-pane",document.body.appendChild(c);const t=new Yr.Pane({title:"3D Maze Options",container:c});t.addInput(Jt,"color",{view:"color"}),xo.position.z=Jt.z,t.addInput(Jt,"z",{min:2,max:40,step:.1}).on("change",e=>{xo.position.z=Jt.z}),t.addInput(Jt,"rows",{min:1,max:10,step:1}),t.addInput(Jt,"columns",{min:1,max:10,step:1}),t.addInput(Jt,"depth",{min:1,max:10,step:1}),t.addInput(Jt,"spacing",{min:1.5,max:5,step:.1}),Ol(),t.on("change",()=>{Ol()})}gv();
