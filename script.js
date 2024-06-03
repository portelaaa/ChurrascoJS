document.getElementById("formulario").addEventListener("submit", (evt) => {
    evt.preventDefault();

    let adulto = parseInt(document.getElementById("adulto").value);
    let crianca = parseInt(document.getElementById("crianca").value);
    let bebida = parseInt(document.getElementById("bebida").value);

    let carne = (adulto * 400) + (crianca * 200);
    let acomp = (adulto * 200) + (crianca * 200);
    let agua = (adulto * 400) + (crianca * 400);

    const carneTotal = carne / 1000;
    const acompTotal = acomp / 1000;
    const aguaTotal = agua / 1000;

   

    let bebeRefri = adulto - bebida;

    let refri = (bebeRefri * 500) + (crianca * 500);
    const refriTotal = refri / 1000;
    let cerveja = bebida * 2000;
    const cervejaTotal = cerveja / 1000;

    document.getElementById("entradaBebida").textContent = bebida;
    document.getElementById("entradaAdulto").textContent = adulto - bebida;
    document.getElementById("entradaCrianca").textContent = crianca;
    document.getElementById("entradaCarne").textContent = carneTotal+ " kg";
    document.getElementById("entradaAcomp").textContent = acompTotal + " kg";
    document.getElementById("entradaCerveja").textContent = cervejaTotal + " L";
    document.getElementById("entradaRefri").textContent = refriTotal + " L";
    document.getElementById("entradaAgua").textContent = aguaTotal + " L";

    if ( adulto < bebida)
    {
        alert ("Número de adultos que consomem bebidas alcolicas maior que a quantidade total de adultos, por favor digite a quantidade certa");
    }
});