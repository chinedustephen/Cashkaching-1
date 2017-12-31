import React from "react";
import styled from "styled-components";

const Latest = styled.div``;
const HeaderLine = styled.div`
  border-bottom: 5px solid #eee6e6;
`;
const LatestHeader = styled.p`
  font-family: Campton-Bold;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0.89px;
`;
const BlogName = styled.p`
  font-family: Campton-Medium;
  font-size: 24px;
  color: #fafafa;
  line-height: 28px;
`;

const BlogSnippet = () => (
  <Latest>
    <HeaderLine>
      <LatestHeader>Lattest Blog Post</LatestHeader>
    </HeaderLine>
    <BlogName>Hello Nijeria...</BlogName>
  </Latest>
);

export default BlogSnippet;
