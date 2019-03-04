import React from 'react'

class FieldFileInput extends React.Component {

    onChange = event => {
        const {input: {onChange}} = this.props;
        onChange(event.target.files[0]);
    };

    render() {
        const { meta } = this.props;
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className="field">
                <div className={className}>
                    <label htmlFor="file" className="ui icon button">
                        <i className="file icon" />
                        Open File
                    </label>
                    <input type="file" id="file" style={{ display: "none"}} accept=".jpg, .png, .jpeg" onChange={this.onChange}/>
                </div>
            </div>
        )
    }
}

export default FieldFileInput