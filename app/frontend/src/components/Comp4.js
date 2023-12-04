import React from 'react'

const Comp4 = () => {
  return (
    <div><div className="row">
    <div className="col-lg-6">
        <div className="card-box">
            <h4 className="header-title">Table head options</h4>
            <p className="sub-header">
                Similar to tables and dark tables, use the modifier classNamees <code className="highlighter-rouge">.thead-light</code> or <code className="highlighter-rouge">.thead-dark</code> to make <code className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.
            </p>

            <div className="table-responsive">
                <table className="table mb-0">
                    <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div> 

        </div> 
    </div> 
    <div className="col-lg-6">
        <div className="card-box">
            <h4 className="header-title">Contextual classNamees with Background color</h4>
            <p className="sub-header">
                You can also invert the colors—with light text on dark backgrounds—with <code className="highlighter-rouge">.table-dark</code>.
            </p>

            <div className="table-responsive">
                <table className="table table-dark text-white mb-0">
                    <thead>
                    <tr className="">
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-primary">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr className="bg-custom">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr className="bg-pink">
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div> 
    </div> 
</div>
</div>
  )
}

export default Comp4