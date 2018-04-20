import React from 'react';
import { DataContext } from './DataContainer';
import Gear from './img/gear';

class UpdateDataForm extends React.Component {
  constructor() {
    super();

    this.state = {
      indexBeingEdited: null,
      edits: {},
      hidden: true
    }

    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }

  render() {
    return (
      <DataContext.Consumer>
          {store => (
            <div className='form'>
              <Gear onClick={this.toggleHide} />
              {!this.state.hidden && store.data.map((set, key) => (
                this.state.indexBeingEdited === key ?
                  <EditableData 
                    key={key} 
                    index={key} 
                    set={set} 
                    onChange={this.onChange} 
                    onSave={this.onSave.bind(null, store.updateData)}
                    onCancel={this.onCancel} /> :
                  <StaticData 
                    onEdit={this.onEdit} 
                    key={key} 
                    index={key} 
                    set={set} />
              ))}
            </div>
          )}
      </DataContext.Consumer>
    )
  }

  onEdit(index) {
    this.setState(() => ({ indexBeingEdited: index }));
  }

  onCancel() {
    this.setState(() => ({ indexBeingEdited: null, edits: {} }));
  }

  onChange(index, e) {
    const edits = {
      [e.target.name]: Number(e.target.value)
    }

    this.setState(prevState => {
      return {
        edits: Object.assign(prevState.edits, edits)
      }
    });
  }

  onSave(updateContextFunction) {
    updateContextFunction({
      index: this.state.indexBeingEdited,
      data: this.state.edits
    });

    this.onCancel();
  }

  toggleHide() {
    console.log('hitt');
    
    this.setState((prevState) => ({ hidden: !prevState.hidden }));
  }
}

const StaticData = ({ index, set, onEdit }) => {
  return (
    <div className='form--module' key={index}>
      {Object.keys(set).map(prop => <div key={prop+index}><span className='bold uppercase'>{[prop]}</span>: {set[[prop]]}</div>)}
      <button onClick={onEdit.bind(null, index)}>Edit</button>
    </div>
  )
}

const EditableData = ({ index, set, onChange, onSave, onCancel }) => {
  return (
    <div className='form--module' key={index}>
      {Object.keys(set).map(prop => (
        prop !== 'total' && 
          <React.Fragment key={prop+index}>
            <label>{prop}</label>
            <input name={prop} onChange={onChange.bind(null, index)} placeholder={set[prop]} />
          </React.Fragment>
      ))}
      <button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default UpdateDataForm;