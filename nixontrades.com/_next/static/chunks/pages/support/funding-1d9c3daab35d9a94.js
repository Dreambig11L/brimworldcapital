(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6756],{12562:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/support/funding",function(){return t(74822)}])},55297:function(e,n,t){"use strict";var i=t(8014),r=t(62044),s=t(75657),l=t.n(s);n.Z=function(){var e=(0,r.Z)("funding").t;return(0,i.jsx)("div",{className:"flex lg:min-w-[250px] lg:max-w-[250px]",children:(0,i.jsxs)("div",{className:"bg-grey-smoke rounded p-6",children:[(0,i.jsx)("div",{className:"font-futura mb-6 text-lg font-bold",children:e("side.title")}),(0,i.jsx)("div",{className:"mb-8",children:e("side.text_1")}),(0,i.jsx)(l(),{href:"/accounts/acat-transfer",children:e("side.text_2")})]})})}},20011:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(12042),r=t(99728),s=t(8014),l=t(56168),a=t(62044),c=t(50862),d=t.n(c),o=t(50744),u=t.n(o),f=t(75657),h=t.n(f),_=t(75332),g=t(31110),x=[{label:"e_funding",value:"/support/funding"},{label:"wire_funds",value:"/support/funding/wire"},{label:"account_transfer",value:"/support/funding/acat"},{label:"check",value:"/support/funding/check"}],m={option:function(e,n){var t=n.isSelected;return(0,r.Z)((0,i.Z)({},e),{backgroundColor:t?"#508AE1":void 0,color:t?"#FFF":void 0})}};function v(e){var n=e.selectedIndex,t=(0,a.Z)("funding").t,i=(0,_.useRouter)(),r=(0,l.useCallback)((function(e){i.asPath!==e.value&&i.push(e.value,void 0,{scroll:!1})}),[i]),c=(0,l.useCallback)((function(e){return t("tabs.".concat(e.label))}),[t]);return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"sm:hidden",children:(0,s.jsx)(g.ZP,{placeholder:t("Please select"),className:"mt-4 w-full",inputId:"tabs",onChange:r,options:x,defaultValue:x[n],formatOptionLabel:c,instanceId:(0,l.useId)(),styles:m})}),(0,s.jsx)("div",{className:"hidden sm:block",children:(0,s.jsx)("div",{className:"border-grayish-blue border-b",children:(0,s.jsx)("nav",{className:"isolate mx-auto flex max-w-4xl","aria-label":"Tabs",children:x.map((function(e,i){return(0,s.jsx)(h(),{href:e.value,scroll:!1,children:(0,s.jsx)("a",{className:u()("mx-auto text-sm h-14 px-1.5 flex items-center justify-center font-futura font-semibold text-ft-blue sm:text-lg sm:px-4 md:px-6 lg:px-8 xl:px-14 outline-0",i===n&&"text-ft-slate border-b border-solid border-ft-slate"),children:t("tabs.".concat(e.label))})},e.label)}))})})})]})}v.defaultProps={selectedIndex:0},v.propTypes={selectedIndex:d().number}},61739:function(e,n,t){"use strict";t.d(n,{Af:function(){return g},F3:function(){return f},lj:function(){return _},oe:function(){return u},xG:function(){return h}});var i=t(43692),r=t(12042),s=t(99728),l=t(21157),a=t(61557),c=t(65954),d=function(e){return"zh-CN"===e?"zh-CN":"zh-Hant"===e?"zh-TW":"en-US"},o=function(e,n,t){return("en-US"===t?"".concat(e).concat(n):"".concat(e,"/").concat(t).concat(n)).replace(/\/+$/,"")},u=function(e,n,t,i){var r="https://www.proultimatewealth.com",s={title:t||"",description:i||""};return s.canonical=o(r,e,n),s.languageAlternates=[{href:o(r,e,"en-US"),hrefLang:"en"},{href:o(r,e,"zh-CN"),hrefLang:"zh-hans"},{href:o(r,e,"zh-TW"),hrefLang:"zh-hant"},{href:o(r,e,"en-US"),hrefLang:"x-default"}],s},f=function(e,n){if(e.length<=n)return[e];for(var t=[],i=0;i<e.length;)t.push(e.slice(i,i+n)),i+=n;return t},h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Intl.NumberFormat("en-US",(0,s.Z)((0,r.Z)({style:"currency"},t),{currency:n})).format(e)},_=function(e,n,t){return 1===e?n*(1+t):_(e-1,n,t)+n*Math.pow(1+t,e)},g=(function(){var e=(0,i.Z)((function(e,n){var t,i,r,s,l,o,u,f,h,_,g,x=arguments;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return t=x.length>2&&void 0!==x[2]&&x[2],i=[],r=function(t){var i={fields:["Slug","locale"],locale:"all",pagination:{page:t,pageSize:100}};return n&&(i.filters=n),(0,c.s1)(e,{params:i})},s=function(e){e.length&&e.forEach((function(e){var n=d(e.attributes.locale);i.push({params:t?{slug:[e.attributes.Slug]}:{slug:e.attributes.Slug},locale:n})}))},[4,r(1)];case 1:if(l=a.sent(),o=l.data,u=o.data,f=o.meta,s(u),!(f.pagination.pageCount>1))return[3,3];for(h=[],_=2;_<=f.pagination.pageCount;_+=1)g=r(_),h.push(g);return[4,Promise.all(h)];case 2:a.sent().forEach((function(e){var n=e.data.data;s(n)})),a.label=3;case 3:return[2,i]}}))}))}(),function(){var e=(0,i.Z)((function(e,n,t){var i,r,s,d,o,u,f,h,_,g,x,m,v,p,b,j,N,w,S;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return o=e.params.slug,u=e.locale,f=function(e){return"zh-CN"===e?"zh-CN":"zh-TW"===e?"zh-Hant":"en"}(u),h={},_=[(0,c.s1)("/api/guides",{params:{locale:f,filters:{Slug:{$eq:o},Category:{$eq:n}},fields:["Slug","Title","Subtitle","Content"],populate:["Section","SEO"]}})],t&&_.push((0,c.s1)("/api/videos",{params:{locale:f,filters:{Slug:{$eq:t}},populate:"Videos"}})),[4,Promise.all(_)];case 1:return g=l.Z.apply(void 0,[a.sent(),2]),x=g[0],m=g[1],v=x.data,(null===(p=v.data)||void 0===p?void 0:p.length)?(b=(0,l.Z)(p,1),j=b[0],h.title=j.attributes.Title,h.subTitle=j.attributes.Subtitle||"",h.slug=j.attributes.Slug,h.content=j.attributes.Content||"",h.sections=j.attributes.Section||null,h.seo={title:(null===(i=j.attributes)||void 0===i||null===(r=i.SEO)||void 0===r?void 0:r.Title)||null,description:(null===(s=j.attributes)||void 0===s||null===(d=s.SEO)||void 0===d?void 0:d.Description)||null},h.videos=[],t&&(N=m.data,(null===(w=N.data)||void 0===w?void 0:w.length)&&(S=(0,l.Z)(w,1),S[0].attributes.Videos.forEach((function(e){var n={title:e.Title,subTitle:e.Time,classNames:"bg-".concat(e.Theme),alt:e.Alt,sources:[{src:e.URL,type:"video/mp4"}]};h.videos.push(n)})))),[2,h]):[2,!1]}}))}))}(),function(e,n){for(var t=null,i=0;i<e.length;i+=1){if(n.includes(e[i].value)){t=e[i];break}if(e[i].options&&(t=g(e[i].options,n)))break}return t})},74822:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return h},default:function(){return _}});var i=t(8014),r=(t(56168),t(62044)),s=t(61739),l=t(22319),a=t(20011),c=t(46834),d=t(37335),o=t.n(d);var u=function(){var e=(0,r.Z)("funding"),n=e.t,t=e.lang;return(0,i.jsx)("div",{className:o().container,children:(0,i.jsxs)("div",{className:o().wrapper,children:[(0,i.jsx)("h1",{className:o().title1,children:n("e_funding.title")}),(0,i.jsx)("div",{children:n("e_funding.text")}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:o().title2,children:n("e_funding.s_1.title")}),(0,i.jsx)("div",{children:n("e_funding.s_1.text")})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:o().title2,children:n("e_funding.s_2.title")}),(0,i.jsxs)("ol",{className:" ml-5 list-decimal",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(c.Z,{i18nKey:"e_funding.s_2.list.item_1",ns:"funding",components:[(0,i.jsx)("a",{"aria-label":"Electronic Funds Transfer (ACH) Agreement",target:"_blank",href:"https://www.proultimatewealth.com/forms/".concat(t.toLowerCase(),"/achform.pdf?v=20220218"),rel:"noopener noreferrer",children:"Electronic Funds Transfer (ACH) Agreement"},"Electronic Funds Transfer (ACH) Agreement")]}),(0,i.jsx)("br",{}),n("e_funding.s_2.list.item_1a")]}),(0,i.jsx)("li",{children:n("e_funding.s_2.list.item_2")}),(0,i.jsxs)("li",{children:[n("e_funding.s_2.list.item_3"),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:n("e_funding.s_2.list.item_3a")}),(0,i.jsx)("br",{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{i18nKey:"contact_info.email",ns:"funding",components:[(0,i.jsx)("a",{"aria-label":"ACH_Service@proultimatewealth.com",href:"mailto:ACH_Service@proultimatewealth.com",children:"ACH_Service@proultimatewealth.com"},"ACH_Service@proultimatewealth.com")]})}),(0,i.jsx)("div",{children:n("contact_info.fax")}),(0,i.jsx)("div",{children:n("contact_info.mail")}),(0,i.jsx)("div",{children:n("contact_info.company")}),(0,i.jsx)("div",{children:n("contact_info.address_1")}),(0,i.jsx)("div",{children:n("contact_info.address_2")}),(0,i.jsx)("div",{children:n("contact_info.zip")})]})]})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:o().title2,children:n("e_funding.s_3.title")}),(0,i.jsxs)("ol",{className:"ml-5 list-decimal",children:[(0,i.jsx)("li",{children:(0,i.jsx)(c.Z,{i18nKey:"e_funding.s_3.list.item_1",ns:"funding",components:[(0,i.jsx)("a",{"aria-label":"Electronic Funds Transfer (ACH) Agreement",target:"_blank",href:"https://www.proultimatewealth.com/forms/".concat(t.toLowerCase(),"/achform.pdf?v=20220218"),rel:"noopener noreferrer",children:"Electronic Funds Transfer (ACH) Agreement"},"Electronic Funds Transfer (ACH) Agreement")]})}),(0,i.jsx)("li",{children:(0,i.jsx)("span",{children:n("e_funding.s_3.list.item_2")})}),(0,i.jsx)("li",{children:n("e_funding.s_3.list.item_3")})]}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:n("e_funding.s_3.text_1")}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:o().note,children:(0,i.jsx)("div",{className:"bg-grey-smoke rounded p-4 text-sm",children:n("e_funding.s_3.note")})})]})]})})},f=t(55297);var h=!0,_=function(){var e=(0,r.Z)("funding"),n=e.t,t=e.lang,c=(0,s.oe)("/support/funding",t,n("title.ach"),n("description.ach")),d=c.title,h=c.description,_=c.languageAlternates,g=c.canonical;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.PB,{title:d,description:h,languageAlternates:_,canonical:g}),(0,i.jsxs)("div",{className:o().funding,children:[(0,i.jsx)("div",{className:o().title,children:n("header")}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row lg:gap-12",children:[(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)(a.Z,{selectedIndex:0}),(0,i.jsx)(u,{})]}),(0,i.jsx)("div",{children:(0,i.jsx)(f.Z,{})})]})]})]})}},37335:function(e){e.exports={funding:"Funding_funding__Svi1v",title:"Funding_title__Oj2SZ",container:"Funding_container__yO7F6",wrapper:"Funding_wrapper__vCj4s",title1:"Funding_title1___I068",title2:"Funding_title2__A1u0A",note:"Funding_note__kX5HK",redTitle:"Funding_redTitle__xfLzr",lightblueBox:"Funding_lightblueBox__KXcVK",red:"Funding_red__mJPdD",borderBottom:"Funding_borderBottom__1rTPW",width150:"Funding_width150__F8Mfr",flex:"Funding_flex__lTx_w"}}},function(e){e.O(0,[2319,1110,9774,2888,179],(function(){return n=12562,e(e.s=n);var n}));var n=e.O();_N_E=n}]);