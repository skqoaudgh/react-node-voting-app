import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';

import { vote, deletePoll } from '../store/actions';
import { color } from '../services/color';

import DELETE_ICON from '../assets/delete.svg';

const Poll = ({ auth, poll, vote, deletePoll }) => {
  const history = useHistory();
  const answers =
    poll.options &&
    poll.options.map((option) => (
      <button
        className="button"
        onClick={() => vote(poll._id, { answer: option.option })}
        key={option._id}
      >
        {option.option}
      </button>
    ));

  const data = {
    labels: poll.options.map((option) => option.option),
    datasets: [
      {
        label: poll.question,
        backgroundColor: poll.options.map(() => color()),
        borderColor: '#323643',
        data: poll.options.map((option) => option.votes),
      },
    ],
  };

  async function handleDelete(path) {
    await deletePoll(path);
    history.push('/');
  }

  return (
    <div>
      <div className="title-container">
        <h3 className="poll-title">{poll.question}</h3>
        {poll && auth.user && poll.user === auth.user.id && (
          <img
            className="button_delete"
            src={DELETE_ICON}
            alt=""
            title="삭제"
            onClick={() => handleDelete(poll._id)}
          />
        )}
      </div>
      <div className="button_center">{answers}</div>
      <Pie data={data} />
    </div>
  );
};

export default connect(
  (store) => ({
    poll: store.currentPoll,
    auth: store.auth,
  }),
  { vote, deletePoll }
)(Poll);
