/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MetadataBlog = require('../../core/MetadataBlog.js');
const BlogPost = require('../../core/BlogPost.js');
const utils = require('../../core/utils.js');

const Container = CompLibrary.Container;

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl, chatUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo"/>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/gear.svg`}/>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig}/>
          <PromoSection>
            <Button href={docUrl('index.html')}>Tutorial</Button>
            <Button href={`${baseUrl}blog`}>Blog</Button>
            <Button href={chatUrl}>Chat</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const LastBlogPosts = () => (
      <Container className="mainContainer postContainer blogContainer">
        <h1>Latest news</h1>
        <div className="posts">
          {MetadataBlog.slice(0, 5).map(
            post => (
              <BlogPost
                post={post}
                content={post.content}
                truncate
                key={
                  utils.getPath(post.path, this.props.config.cleanUrl) +
                  post.title
                }
                config={this.props.config}
              />
            ),
          )}
        </div>
        <Button href={`${baseUrl}blog`}>Blog</Button>
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language}/>
        <div className="mainContainer">
          <LastBlogPosts/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
