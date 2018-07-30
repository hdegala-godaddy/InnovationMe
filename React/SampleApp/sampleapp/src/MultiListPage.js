import React from 'react';


class ListItem extends React.Component{

    render() {
        return (
            <div>   
                <img src = {this.props.url} />
                <h1> {this.props.header}</h1>
                <p> {this.props.description}</p>
                {this.props.family && this.props.family.map(familyMember => <ListItem style={{"margin-left":"100px"}} {...familyMember}/>)}
            </div>
        );
    }
}


class List extends React.Component{
    variable = "Harsha Variable";
    state = {
        listItems : [{
        url:"",
        header: "Harsha",
        description: " Get in to this",
        family: [
            {
                url:"",
                header: "Jahnawii",
                description: " Getting in to this"
            },
            {
                url:"",
                header: "Anagha",
                description: " Getting in to this"
            },
            {
                url:"",
                header: "Anaaya",
                description: " Getting in to this"
            }
        ]
    },
    {
        url:"",
        header: "Jahnawii",
        description: " Get in to this"
    },
    {
        url:"",
        header: "Anagha",
        description: " Get in to this"
    },
    {
        url:"",
        header: "Anaaya",
        description: " Get in to this"
    }
]};

    render(){
        return (
            <div>
             <p> {this.variable} </p>   
            {this.state.listItems.map( listItem => <ListItem {...listItem} /> )}
            </div>
        );
    }

}

export default List;
