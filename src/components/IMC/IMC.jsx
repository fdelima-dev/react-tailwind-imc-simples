import { useState } from "react";

const IMC = () =>{
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const [exibirPagina, setExibirPagina] = useState(false);

    const [resultado, setResultado] = useState('');

    const imc = peso / (altura * altura);

    function calculaIMC(){
        if(imc < 18.5){
            return <p className="text-center text-white">Abaixo do peso</p>
        } else if(imc < 25 && imc >= 18.5){
            return <p className="text-center text-white">Peso ideal</p>
        } else if(imc <= 30 && imc > 25){
            return <p className="text-center text-white">Sobrepeso</p>
        } else if(imc <= 35 && imc > 30){
            return <p className="text-center text-white">Obesidade nível I</p>
        } else if(imc <= 40 && imc > 35){
            return <p className="text-center text-white">Obesidade nível II</p>
        } else {
            return <p className="text-center text-white">Obesidade nível III</p>
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        setExibirPagina(true);
        setResultado(calculaIMC());
    }

    return(
        <div>
            <div className="w-[400px] h-[270px] mx-auto block">
                <h2 className="text-white font-bebasNeue text-center text-4xl">IMC</h2>
                <form onSubmit={handleSubmit}>
                    <h3 className="text-center font-bebasNeue text-white text-2xl">
                        Digite seu peso
                    </h3>
                    <input type="text" className="block mx-auto" onChange={(e) => setPeso(Number(parseInt(e.target.value)))} />
                    <h3 className="text-center font-bebasNeue text-white text-2xl">
                        Digite sua altura
                    </h3>
                    <input type="text" className="block mx-auto" onChange={(e) => setAltura(Number(parseFloat(e.target.value)))} />
                    <br />
                    <button className="block mx-auto w-[150px] no-border px-2 py-1 rounded bg-blue-500 text-white" type="submit">Enviar</button>
                </form>
            </div>

            {
                exibirPagina && peso && altura && resultado
            }
        </div>
    )
}


export default IMC;