const modalMusic = {

    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document
            .querySelector('.modal-overlayMusic')
            .classList
            .add('active');

    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document
        .querySelector('.modal-overlayMusic')
        .classList
        .remove('active');
    }

}

const modalScrap = {

    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document
            .querySelector('.modal-overlayScrap')
            .classList
            .add('active');

    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document
        .querySelector('.modal-overlayScrap')
        .classList
        .remove('active');
    }

}