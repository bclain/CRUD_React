import React, { Component}  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Addstudent extends Component {


    state = {
        name: '',
        course: '',
        email: '',
        phone: '',
    }

    handleInput = (e) => {
        this.setState({
           [ e.target.name]: e.target.value
        })
    }
    updateStudent = async (e) => {
        e.preventDefault();


      const res = await axios.post('http://localhost:8000/api/add-student', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message)
            this.setState({
                name: '',
                course: '',
                email: '',
                phone: '',
            });
        }
    }

    render(){
        return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add Data
                            <Link to={"/"} className="btn btn-primary btn-sn float-end "> Back </Link>
                            </h4>
                        </div>
                        <div className="card-body">

                            <form onSubmit={this.updateStudent}>
                                <div className="form-group mb-3">
                                    <label>Student Name</label>
                                    <input type="text" name='name' onChange={this.handleInput} value={this.state.name} className='form-control' />
                                </div>

                                <div className="form-group mb-3">
                                    <label>Student Course</label>
                                    <input type="text" name='course' onChange={this.handleInput} value={this.state.course} className='form-control' />
                                </div>

                                <div className="form-group mb-3">
                                    <label >Student Email</label>
                                    <input type="text" name='email' onChange={this.handleInput} value={this.state.email}  className='form-control' />
                                </div>

                                <div className="form-group mb-3">
                                    <label >Student Phone</label>
                                    <input type="text" name='phone' onChange={this.handleInput} value={this.state.phone}  className='form-control' />
                                </div>
                                <div className="form-group mb-3">
                                <button type='submit' className='btn btn-primary'> Add Student</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      );
    }
}

export default Addstudent;