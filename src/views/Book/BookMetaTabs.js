import React from 'react';
import { Typography, Tabs, Tab } from '@material-ui/core';
class BookMetaTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const value = this.state.value;

    const {
      subjects,
      publishers,
      identifiers,
      publish_date,
      number_of_pages,
    } = this.props.book;

    // todo: this is not working right 🙁
    const ids = () => {
      for (const prop in identifiers) {
        return (
          <span>
            {prop}:{' '}
            {identifiers[prop].map((id, idx) => (
              <span key={idx}>{id}</span>
            ))}
          </span>
        );
      }
    };

    return (
      <div>
        <Typography
          variant="subheading"
          style={{ fontWeight: '500' }}>
          {this.props.bookTitle} Additional Information
        </Typography>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          scrollable>
          {subjects && <Tab label="Subjects" value={0} />}
          {publishers && (
            <Tab label="Publishers" value={1} />
          )}
          {identifiers && (
            <Tab label="Identifiers" value={2} />
          )}
          {publish_date && (
            <Tab label="Publish Date" value={3} />
          )}
          {number_of_pages && (
            <Tab label="Number of Pages" value={4} />
          )}
        </Tabs>
        <div className="book-meta-tabs__container">
          {value === 0 && (
            <div>
              {subjects.slice(1, 4).map((subj, idx) => (
                <Typography key={idx}>
                  {subj.name}
                </Typography>
              ))}
            </div>
          )}
          {value === 1 && (
            <div>
              {publishers.map((pub, idx) => (
                <Typography key={idx}>
                  {pub.name}
                </Typography>
              ))}
            </div>
          )}
          {value === 2 && <Typography>{ids()}</Typography>}
          {value === 3 && (
            <Typography>{publish_date}</Typography>
          )}
          {value === 4 && (
            <Typography>{number_of_pages}</Typography>
          )}
        </div>
      </div>
    );
  }
}

export default BookMetaTabs;
