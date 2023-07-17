import React from 'react'

function Alerts(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-3`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    );
}

export default Alerts