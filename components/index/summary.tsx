import NumberFormat from 'react-number-format';



export default function Summary({data}) {
    return (<>
    <div className="row">
    <div className="fs-3"> Resumen </div>
    </div>
    <div className="gallery">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total: 1ra dosis</h5>
            <p className="card-text"><NumberFormat value={data.firtsDose } displayType={'text'} thousandSeparator={true} />  personas</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total: 2da dosis</h5>
            <p className="card-text"><NumberFormat value={data.secondDose } displayType={'text'} thousandSeparator={true} /> personas</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Ayer: 1ra dosis</h5>
            <p className="card-text"><NumberFormat value={data.firtsDoseYesterday } displayType={'text'} thousandSeparator={true} /> personas</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Ayer: 2da dosis</h5>
            <p className="card-text"><NumberFormat value={data.secondDoseYesterdayYesterday } displayType={'text'} thousandSeparator={true} /> personas</p>
          </div>
        </div>
        <div className="card feature">
          <div className="card-body">
            <h5 className="card-title">Total de dosis administradas (1ra y 2da dosis)</h5>
            <p className="card-text"><NumberFormat value={data.totalDose } displayType={'text'} thousandSeparator={true} /> personas</p>
          </div>
        </div>
        <div className="card feature">
          <div className="card-body">
            <h5 className="card-title">Dosis administradas ayer (1ra y 2da dosis)</h5>
            <p className="card-text"><NumberFormat value={data.totalYesterday } displayType={'text'} thousandSeparator={true} /> personas</p>
          </div>
        </div>
    <div className="card total">
          <div className="card-body">
            <h5 className="card-title">Total de personas vacunadas con ambas dosis</h5>
            <p className="card-text"><NumberFormat value={data.totalBothDose } displayType={'text'} thousandSeparator={true} /> personas</p>
          </div>
        </div>
      </div>
     </>);
}