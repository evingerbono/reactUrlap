import {useState} from "react";
export default function FormComponens(props) {
    const [obj, setObj]=useState({
        nev:"",
        szulev:2000
    })
    function valtKez(event){
        let sv={...obj}
        sv[event.target.id]=event.target.value
        setObj({...sv});
    }
    function adatKuld(event){
        event.preventDefault();
        console.log(obj);
        props.adatKuld(obj);
    }

    return (
        <form onSubmit={adatKuld}>
            <div>
                <label htmlFor="nev" class="form-label">Név</label>
                <input type="text" class="form-control" id="nev" placeholder="Név" name="nev" value={obj.nev} onChange={valtKez}/>
            </div>
            <div>
                <label htmlFor="szl" class="form-label">Születési év</label>
                <input type="number" class="form-control" id="szulev" name="szl" value={obj.szulev} min="1900" max="2024" onChange={valtKez}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}