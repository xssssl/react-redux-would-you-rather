import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

interface AuthLocationState {
  fromPath: {current: string}
}

const NewPoll: React.FC = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 offset-sm-4">
          <form>
            <div className="text-center">
              <img className="img-avatar mt-4 mb-4" src='/assets/logo2.png' alt="would you rather"/>
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="NewPollOptionOne">Option One:</label>
              <input type="text" className="form-control" id="NewPollOptionOne" placeholder="Option One" />
            </div>
            <div className="form-group">
              <label className="col-form-label" htmlFor="NewPollOptionTwo">Option Two:</label>
              <input type="text" className="form-control" id="NewPollOptionTwo" placeholder="Option Two" />
            </div>
            <div className="form-group row mt-5">
              <div className="col-sm-12">
                <button className="btn btn-info btn-block">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPoll