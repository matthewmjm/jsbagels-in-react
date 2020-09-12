import React from 'react';


// const Form = () => {
//     return <h3>This is the Form</h3>
// }

// const Form = () => {
//     return(
//         <div>
//             <h3>This is the Form</h3>
//             <form>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>

//     ) 
// }

// class Form extends React.Component {

//     state = {
//         bagelStateForm: 'default bagel value'
//     }

//     handleSubmit(event){
//         event.preventDefault()
//         console.log(event)
//         console.log('submit')
//     }

// render(){
//     return(
//         <>
//             <h3>This is the Form</h3>
//             <form onSubmit={(event)=> this.handleSubmit(event)}>
//                 <input placeholder={this.state.bagelStateForm}></input>
//                 <button type="submit">Bagel Submit</button>
//             </form>
//         </>
//     )} 
// }

class Form extends React.Component {

    state = {
        bagelStateForm: 'default bagel value'
    }
    
    handleSubmit(event){
        event.preventDefault()
        // console.log('submit')
        // console.log(event)
        // console.log(this.state)
        this.props.submitBagel(this.state.bagelStateForm)
        this.setState({
            bagelStateForm: ""
        })
    }
    
        handleUserBagel(event){
            console.log('event', event.target.value)
            this.setState({
                bagelStateForm: event.target.value
            })
        }
    
    render(){
        return(
        <>
            <h3>This is the Form</h3>
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <input 
                    name='inputBagel' 
                    type='text' 
                    value={this.state.bagelStateForm} 
                    // placeholder={this.state.bagelStateForm} 
                    onChange={(event)=> this.handleUserBagel(event)}/>
                <button type="submit">Bagel Submit</button>
            </form>
        </>
        ) 
    }
}

export default Form