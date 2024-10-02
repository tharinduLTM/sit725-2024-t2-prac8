const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s12 center-align" >
                <div class="card medium" style="background-color: #26a69a; height: 300px;">
                    <div class="card-content">
                        <span class="card-title grey-text text-darken-4">Hello ${item.firstName} ${item.lastName}</span>
                        <p>Your State Flag:</p>
                        <p></p>
                        <img src="${item.currentState}" alt="State Flag" style="width:180px; height:90px;">
                    </div>
                </div>
            </div>`;
        $("#card-section").html(itemToAppend);

        $("#lastSubmittedDetails").removeAttr("hidden");
    });
};

const formSubmitted = () => {
    let formData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        currentState: `images/${$('#currentState').val()}.jpg`,
    };

    console.log(formData);
    postDetails(formData);
};

function postDetails(details) {
    $.ajax({
        url: '/api/details',
        type: 'POST',
        data: details,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('Details submitted successfully');
                getLastSubmittedDetails(); 
            }
        }
    });
}

function getLastSubmittedDetails() {
    $.get('/api/lastDetail', (response) => {
        if (response.statusCode === 200) {
            addCards([response.data]); 
        }
    });
}


let socket = io();
socket.on('state', (state) => {
    console.log('Broadcasting State: ' + state);
    $('#broadcastingStateDisplay').text('Broadcasting State: ' + state);
});

$(document).ready(function () {
    $('select').formSelect();
    $('#formSubmit').click(() => {
        formSubmitted();
    });
    $('.modal').modal();
    getLastSubmittedDetails();
});
