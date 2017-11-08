import { injectGlobal } from "styled-components";
import WebFont from "webfontloader";

/* eslint no-unused-expressions: 0 */

WebFont.load({
	google: {
		families: ["Roboto:300,400,500", "sans-serif"]
	}
});
WebFont.load({
	custom: {
		families: ["Campton-BoldDEMO", "Campton-LightDEMO"],
		urls: ["./Fonts/Campton-BoldDEMO", "./Fonts/Campton-LightDEMO"]
	}
});

injectGlobal`
  html,
  body {
    margin: 0px;
    font-family:'Roboto', sans-serif;
  }

  body {
    background-color: #FFFFFF;
  }

  p,
  label {
    font-size: 10px;
  }

  a{
    text-decoration: none;
		color: #212121;
  }
`;
