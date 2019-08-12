import React from "react";
import { Tab, Menu, Label } from "semantic-ui-react";
import VocabsContainer from "./VocabsContainer";
import { connect } from "react-redux";

function VocabPanes(props) {
  const panes = [
    {
      menuItem: (
        <Menu.Item key="messages">
          Learning Vocabs<Label>{props.learningListLength}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <VocabsContainer isLearning={true} />
        </Tab.Pane>
      )
    },
    {
      menuItem: (
        <Menu.Item key="messages">
          Learned Vocabs<Label>{props.learnedListLength}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <VocabsContainer isLearning={false} />
        </Tab.Pane>
      )
    }
  ];
  return (
    <div>
      <Tab className="Panes" panes={panes} />
    </div>
  );
}

const mapStateToProps = state => ({
  learningListLength: state.vocabs.learningListLength,
  learnedListLength: state.vocabs.learnedListLength
});

export default connect(mapStateToProps)(VocabPanes);
