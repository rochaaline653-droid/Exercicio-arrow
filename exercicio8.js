function simulaPromise(sucesso) {
    const promessa = new Promise((resolve, reject) => {
        if (sucesso) {
            resolve('ok');
        } else {
            reject('not ok');
        }
    });

    promessa
        .then((resultado) => console.log(resultado))
        .catch((erro) => console.log(erro));
}

simulaPromise(false); // not ok
simulaPromise(true);  // ok