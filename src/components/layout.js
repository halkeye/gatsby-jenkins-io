import * as React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import CDFLogo from '../images/cdf.svg';

import '../layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <title>
          {data.site.siteMetadata?.title || 'Title'}
        </title>
        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <link href="https://www.jenkins.io/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="https://www.jenkins.io/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="https://www.jenkins.io/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="https://www.jenkins.io/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="https://www.jenkins.io/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#2b5797" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@JenkinsCI" name="twitter:site" />
        <meta content="@JenkinsCI" name="twitter:creator" />
        <meta content="article" property="og:type" />
        <meta content="https:/www.jenkins.io/template/" property="og:url" />
        <style>
          {'#grid-box { position: relative } '}
        </style>
        <style>
          {'html { min-height:100%; position: relative; }'}
        </style>
      </Helmet>
      <script src="https://www.jenkins.io/assets/bower/jquery/jquery.min.js" dangerouslySetInnerHTML={{ __html: [] }} />
      <nav className="navbar navbar-expand-lg navbar-dark top bg-dark fixed-top" id="ji-toolbar">
        <a className="navbar-brand" href="https://www.jenkins.io/">

          Jenkins
        </a>
        <button className="navbar-toggler" data-target="#CollapsingNavbar" data-toggle="collapse" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="CollapsingNavbar">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <button type="button" aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown">
                <img src={CDFLogo} alt="CDF Logo" width="36" height="18" />
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item feature" href="https://cd.foundation/">

                  What is CDF?
                </a>
                <a className="dropdown-item feature" href="https://jenkins-x.io/">

                  Jenkins X
                </a>
                <a className="dropdown-item feature" href="https://cloud.google.com/tekton/">

                  Tekton
                </a>
                <a className="dropdown-item feature" href="https://www.spinnaker.io/">

                  Spinnaker
                </a>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/blog/" activeClassName="active" partiallyActive>
                Blog
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown">
                Documentation
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item feature" to="/doc/book/" activeClassName="active" partiallyActive>
                  <strong>
                    User Guide
                  </strong>
                </Link>
                <Link className="dropdown-item" to="/doc/book/installing/" activeClassName="active" partiallyActive>
                  &nbsp;- Installing Jenkins
                </Link>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/book/pipeline/">

&nbsp;- Jenkins Pipeline
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/book/managing/">

&nbsp;- Managing Jenkins
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/book/security/">

&nbsp;- Securing Jenkins
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/book/system-administration/">

&nbsp;- System Administration
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/book/glossary/">

&nbsp;- Terms and Definitions
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/solutions/">
                  <strong>

                    Solution Pages
                  </strong>
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/tutorials/">
                  <strong>

                    Tutorials
                  </strong>
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/pipeline/tour/getting-started/">

&nbsp;- Guided Tour
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/doc/tutorials/">

&nbsp;- More Tutorials
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/doc/developer/">
                  <strong>

                    Developer Guide
                  </strong>
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/participate/">
                  <strong>

                    Contributor Guide
                  </strong>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://plugins.jenkins.io">
                Plugins
              </a>
            </li>
            <li className="nav-item dropdown">
              <button aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown">

                Community
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item feature" href="https://www.jenkins.io/participate/">

                  Overview
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/chat/" title="Chat with the rest of the Jenkins community on IRC">

                  Chat
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/jam/">

                  Meet
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/events/">

                  Events
                </a>
                <a className="dropdown-item feature" href="https://issues.jenkins.io/">

                  Issue Tracker
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/mailing-lists/" title="Browse Jenkins mailing list archives and/or subscribe to lists">

                  Mailing Lists
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/project/roadmap/">

                  Roadmap
                </a>
                <a className="dropdown-item feature" href="https://accounts.jenkins.io/" title="Create/manage your account for accessing wiki, issue tracker, etc">

                  Account Management
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/">
                  <strong>

                    Special Interest Groups
                  </strong>
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/advocacy-and-outreach/">

&nbsp;- Advocacy and Outreach
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/chinese-localization/">

&nbsp;- Chinese Localization
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/cloud-native/">

&nbsp;- Cloud Native
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/docs/">

&nbsp;- Documentation
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/gsoc/">

&nbsp;- Google Summer of Code
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/hw-and-eda/">

&nbsp;- Hardware and EDA
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/pipeline-authoring/">

&nbsp;- Pipeline Authoring
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/platform/">

&nbsp;- Platform
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/ux/">

&nbsp;- User Experience
                </a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <button aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown">

                Subprojects
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/">

                  Overview
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/evergreen/">

                  Evergreen
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/gsoc/">

                  Google Summer of Code in Jenkins
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/infrastructure/">

                  Infrastructure
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/jam/">

                  CI/CD and Jenkins Area Meetups
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/jcasc/">

                  Jenkins Configuration as Code
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/jenkins-operator/">

                  Jenkins Operator
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/projects/remoting/">

                  Jenkins Remoting
                </a>
                <a className="dropdown-item feature" href="https://www.jenkins.io/sigs/docs/gsod/2020/projects/document-jenkins-on-kubernetes/">

                  Document Jenkins on Kubernetes
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <button aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown">

                About
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="https://www.jenkins.io/project/roadmap/">

                  Roadmap
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/security/">

                  Security
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/press/">

                  Press
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/awards/">

                  Awards
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/project/conduct/">

                  Conduct
                </a>
                <a className="dropdown-item" href="https://www.jenkins.io/artwork/">

                  Artwork
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <button aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown">

                English
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="https://www.jenkins.io/zh/">

                  中文 Chinese
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-outline-secondary" href="https://www.jenkins.io/download/">

                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="pt-4">

&nbsp;
      </div>
      <div id="grid-box">
        <br />
        <br />
        {children}
      </div>
      <script src="https://www.jenkins.io/assets/bower/anchor-js/anchor.min.js" dangerouslySetInnerHTML={{ __html: [] }} />
      <script src="https://www.jenkins.io/assets/bower/tether/js/tether.min.js" dangerouslySetInnerHTML={{ __html: [] }} />
      <script src="https://www.jenkins.io/assets/bower/bootstrap/js/bootstrap.min.js" dangerouslySetInnerHTML={{ __html: [] }} />
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="license-box">
                <div id="creativecommons">
                  <a href="https://creativecommons.org/licenses/by-sa/4.0/">
                    <p>
                      <img alt="Creative Commons Attribution-ShareAlike license" src="https://licensebuttons.net/l/by-sa/4.0/88x31.png" />
                    </p>
                  </a>
                  <p>

                    The content driving this site is licensed under the Creative
                    Commons Attribution-ShareAlike 4.0 license.
                  </p>
                </div>
              </div>
            </div>
            <div className="links col-md-8">
              <div className="container">
                <div className="row">
                  <div className="area col-md-3">
                    <div className="div-mar">
                      <h5>
                        Resources
                      </h5>
                      <ul className="resources">
                        <li>
                          <a href="https://www.jenkins.io/download/">

                            Downloads
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/node/">

                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/doc/">

                            Documentation
                          </a>
                        </li>
                        <li>
                          <a href="https://plugins.jenkins.io/">

                            Plugins
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/security/">

                            Security
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/participate/">

                            Contributing
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="area col-md-3">
                    <div className="div-mar">
                      <h5>
                        Project
                      </h5>
                      <ul className="project">
                        <li>
                          <a href="https://www.jenkins.io/project/">

                            Structure and governance
                          </a>
                        </li>
                        <li>
                          <a href="https://issues.jenkins.io">

                            Issue tracker
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/project/roadmap/">

                            Roadmap
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/jenkinsci">

                            GitHub
                          </a>
                        </li>
                        <li>
                          <a href="https://ci.jenkins.io">

                            Jenkins on Jenkins
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="area col-md-3">
                    <div className="div-mar">
                      <h5>
                        Community
                      </h5>
                      <ul className="community">
                        <li>
                          <a href="https://www.jenkins.io/events/">

                            Events
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/mailing-lists/">

                            Mailing lists
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/chat/">

                            Chats
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/sigs/">

                            Special Interest Groups
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/jenkinsci">

                            Twitter
                          </a>
                        </li>
                        <li>
                          <a href="https://reddit.com/r/jenkinsci">

                            Reddit
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="area col-md-3">
                    <div className="div-mar">
                      <h5>
                        Other
                      </h5>
                      <ul className="other">
                        <li>
                          <a href="https://www.jenkins.io/conduct/">

                            Code of Conduct
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/press/">

                            Press information
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/merchandise/">

                            Merchandise
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/artwork/">

                            Artwork
                          </a>
                        </li>
                        <li>
                          <a href="https://www.jenkins.io/awards/">

                            Awards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: ['\n  $(function(){\n    var $body = $(document.body);\n    $(".nav-link.dropdown-toggle").on("mousedown", function(){\n      $body.addClass("no-outline");\n    })\n    $body.on("keydown", function(){\n      $body.removeClass("no-outline");\n    })\n  })\n'] }} />
    </div>
  );
};

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
