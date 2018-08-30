import React from 'react';
//import "./MultiListPage.css";

const styles = {
        "margin-left": "100px"
    };


class ListItem extends React.Component{

    clicked = () => {
        console.log("Clicked ");
    }

    render() {
        return (
            <div style={this.props.style} onClick={}>   
                <img src = {this.props.url} />
                <h1> {this.props.header}</h1>
                <p> {this.props.description}</p>
                {this.props.family && this.props.family.map(familyMember => <ListItem style={styles} {...familyMember}/>)}
            </div>
        );
    }
}

class List extends React.Component{
    variable = "Harsha Variable";
    state = {
            sourceArray : this.props.sourceArray
        };

    render(){
        return (
            <div>
             <p> {this.variable} </p>   
               {this.state.sourceArray.map( listItem => <ListItem  {...listItem}/> )}
            </div>
        );
    }

}

export default List;
