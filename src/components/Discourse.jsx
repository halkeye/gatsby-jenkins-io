import * as React from 'react';

const Discourse = ({ topicId }) => {
  React.useEffect(() => {
    if (!topicId) { return; }
    const embedOptions = { discourseUrl: 'https://community.jenkins.io/' };
    if (topicId !== true) {
      // Support both topic IDs and full URLs
      // TODO: Check number validity
      embedOptions.topicId = topicId.replace(/\/\s*$/, '').replace(/.*\//, '');
    }

    window.DiscourseEmbed = embedOptions;

    const d = document.createElement('script');
    d.type = 'text/javascript';
    d.async = true;
    d.src = `${window.DiscourseEmbed.discourseUrl}javascripts/embed.js`;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
  }, [topicId]);

  if (!topicId) { return <div />; }

  return (
    <div>
      <b className="title">Discuss</b>
      <div id="discourse-comments" />
    </div>
  );
};

export default Discourse;
