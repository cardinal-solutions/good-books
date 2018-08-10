import React from 'react';
import Typography from '@material-ui/core/Typography';
class BookMeta extends React.Component {
  static Title = ({ title }) => (
    <Typography variant="title">{title}</Typography>
  );
  static Author = ({ author }) => (
    <Typography variant="subheading">{author}</Typography>
  );

  render() {
    return (
      <div className="BookMeta">
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            title: this.props.title,
            author: this.props.author,
            subjects: this.props.subjects,
          })
        )}
      </div>
    );
  }
}

export default BookMeta;
