import * as React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';

const DownloadBanner = () => (
  <div className="banner-container">
    <div className="skew" />
    <div className="container">
      <div className="row">
        &nbsp;
      </div>
      <div className="row">
        <div className="col-md-1 col-lg-2" />

        <div className="col-md-5 col-lg-4">
          <div className="logo" style={{ width: '256px' }}>
            <Logo />
          </div>
        </div>

        <div className="col-md-5 col-lg-4">
          <h1 className="page-title">
            <span>
              Jenkins
            </span>
          </h1>
          <p>
            <strong>
              Build great things at any scale
            </strong>
          </p>
          <p>
            The leading open source automation server, Jenkins provides
            hundreds of plugins to support building, deploying and automating
            any project.
          </p>
          <div className="container">
            <div className="row">
              <Link className="btn btn-secondary m-1" to="/doc">
                Documentation
              </Link>
              <Link className="btn btn-primary m-1" to="/download">
                Download
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-1.col-lg-2" />
      </div>
    </div>
  </div>
);
DownloadBanner.displayName = 'DownloadBanner';
export default DownloadBanner;
