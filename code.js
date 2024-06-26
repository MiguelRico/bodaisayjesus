function updateGuestsContent() {
    // Get dropdwon value
    var totalGuests = $('#select-guests-content').find('select[id="totalGuests"]').val();
  
    resetGuestsContent();
  
    // Add carousel indicator for guests
    $("#vertical-carousel ol").append(`
          <li id="guests-entry" data-bs-target="#vertical-carousel" data-bs-slide-to="5"></li>
      `);
  
    // Add carousel item for guests
    $("#carousel-inner").append(`
          <div id="guests-item" class="carousel-item">
              <div class="container" style="height: 100%;">
                    <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                      <div class="col-12 form_sec_outer_task text-center mt-2 mb-2">
                          <h4 class="frm_section_n fw-bold text-center">Confirmar invitados</h4>
                      </div>
                    </div>
                    
                    <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 65%;">
                      <div class="col-12 form_field_outer">
                          <div id="guests-content" class="row form_field_outer_row border rounded align-items-center justify-content-around pt-2 pb-2">
                          </div>
                      </div>  
                    </div>

                    <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                      <div class="col-12 form_field_outer pb-3">
                          <div class="d-flex justify-content-center">
                              <input type="button" class="btn btn-light w-50" value="Reiniciar" onclick="resetGuestsContent()" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `);
  
    // Change guests-content
    $('#guests-content').html(`
          <div class='form-group col-12'>
              <label for='guest-1'>Invitado 1:</label>
              <input type='text' class='form-control guests' id='guest-1' />
          </div>
      `);
  
    // Add to guests-content
    if (totalGuests == 1) {
      // Add allergic and transport page
      addAllergenicAndTransportPage(6);
    } else if (totalGuests > 1 && totalGuests <= 5) {
      for (let i = 1; i < totalGuests; i++) {
        $('#guests-content').append(`
                  <div class="form-group col-12">
                      <label for="guest-` + (i + 1) + `">Invitado ` + (i + 1) + `:</label>
                      <input type="text" class="form-control guests"id="guest-` + (i + 1) + `" />
                  </div>
              `);
      }
  
      // Add allergic and transport page
      addAllergenicAndTransportPage(6);
    } else if (totalGuests > 5) {
      for (let i = 1; i < 5; i++) {
        $("#guests-content").append(`
                  <div class="form-group col-12">
                      <label for="guest-` + (i + 1) + `">Invitado ` + (i + 1) + `:</label>
                      <input type="text" class="form-control guests" id="guest-` + (i + 1) + `" />
                  </div>
              `);
      }
  
      // Add carousel indicator for guests-2
      $("#vertical-carousel ol").append(`
              <li id="guests-entry-2" data-bs-target="#vertical-carousel" data-bs-slide-to="6"></li>
          `);
  
      // Add second guests page
      $("#carousel-inner").append(`
              <div id="guests-item-2" class="carousel-item">
                  <div class="container" style="height: 100%;">
                        <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                          <div class="col-12 form_sec_outer_task text-center mt-2 mb-2">
                              <h4 class="frm_section_n fw-bold text-center">Confirmar invitados</h4>
                          </div>
                        </div>
                
                        <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 65%;">
                          <div class="col-12 form_field_outer">
                              <div id="guests-content-2" class="row form_field_outer_row border rounded align-items-center justify-content-around pt-2 pb-2">
                              </div>
                          </div>
                        </div>

                        <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
  
                          <div class="col-12 form_field_outer mb-3">
                              <div class="d-flex justify-content-center">
                                  <input type="button" class="btn btn-light w-50" value="Reiniciar" onclick="resetGuestsContent()" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `);
  
      // Add to guests-content-2
      for (let i = 5; i < totalGuests; i++) {
        $("#guests-content-2").append(`
                  <div class="form-group col-12">
                      <label for="guest-` + (i + 1) + `">Invitado ` + (i + 1) + `:</label>
                      <input type="text" class="form-control guests" id="guest-` + (i + 1) + `" />
                  </div>
              `);
      }
  
      // Add allergic
      addAllergenicAndTransportPage(7);
    }
  
    $('#vertical-carousel').carousel('next');
  }
  
  function resetGuestsContent() {
    $('#vertical-carousel').carousel(4);
    // Remove finish guests page component
    $("#finish-guests-entry").remove();
    $("#finish-guests-item").remove();
    // Remove first guests page component
    $("#guests-entry").remove();
    $("#guests-item").remove();
    // Remove second guests page component
    $("#guests-entry-2").remove();
    $("#guests-item-2").remove();
    // Remove allergic component
    $("#allergic-entry").remove();
    $("#allergic-item").remove();
    // Remove account component
    $("#account-entry").remove();
    $("#account-item").remove();
    // Remove timeline component
    $("#account-entry").remove();
    $("#account-item").remove();
    // Remove clock component
    $("#clock-entry").remove();
    $("#clock-item").remove();
  }
  
  function nextPage() {
    $('#vertical-carousel').carousel('next');
  }
  
  function prevPage() {
    $('#vertical-carousel').carousel('prev');
  }
  
  function addAllergenicAndTransportPage(position) {
    // Add carousel indicator for allergic
    $("#vertical-carousel ol").append(`
          <li id="allergic-entry" data-bs-target="#vertical-carousel" data-bs-slide-to="` + position + `"></li>
      `);
  
    // Add allergic page
    $("#carousel-inner").append(`
          <div id="allergic-item" class="carousel-item">
              <div class="container" style="height: 100%;">								
                <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                    <div class="col-12 form_sec_outer_task text-center mt-2 mb-2">
                        <h4 class="frm_section_n fw-bold text-center">Alergias y transporte</h4>
                    </div>
                </div>

                <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 65%;">
                      <div class="col-12 form_field_outer">
                          <div class="row form_field_outer_row border rounded">
                              <div class="form-group col-12 mb-2">
                                  <label for="alergias" class="form-label fw-bold">Alergias</label>
                                  <textarea rows="6" class="form-control" id="alergias" placeholder="Por favor indica alergias, intolerancias, vegano..."></textarea>
                              </div>
                          </div>
                      </div>
  
                      <div class="col-12 form_field_outer mt-2">
                          <div class="row form_field_outer_row border rounded">
                              <div class="form-group col-6 mt-2 mb-2">                            
                                  <label for="busIda" class="form-label fw-bold">Ida (19:30)</label>
                                  <select name="busIda" id="busIda" class="form-select form-select-lg">
                                      <option value="No" selected>No</option>
                                      <option value="Si">Si</option>
                                  </select>
                              </div>
  
                              <div class="form-group col-6 mt-2 mb-2">                            
                                  <label for="busVuelta" class="form-label fw-bold">Fin de fiesta</label>
                                  <select name="busVuelta" id="busVuelta" class="form-select form-select-lg">
                                      <option value="No" selected>No</option>
                                      <option value="Si">Si</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                    </div>

                    <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                      <div class="col-12 form_field_outer mb-3">
                              <div class="row justify-content-center">
                                  <div class="col-12 pb-2 text-center">
                                      <input type="button" class="btn btn-light w-50" value="Reiniciar" onclick="resetGuestsContent()" />
                                  </div>
  
                                  <div class="col-12 text-center">
                                      <input id="finishGuests" type="button" class="btn btn-light w-50" value="Finalizar" onclick="finishGuests()" />
                                  </div>
                              </div>
                      </div>
                  </div>
                  
              </div>					
          </div>
      `);
  }
  
  function finishGuests() {
    $("#allergic-entry").addClass("active");
    $("#allergic-item").addClass("active");
  
    // Get dropdwon value
    var totalGuests = $('#select-guests-content').find('select[id="totalGuests"]').val();
  
    var finishPagePosition = 7;
    if (totalGuests > 5) {
      var finishPagePosition = 8;
    }
  
    // Remove finish-guests component
    $("#finish-guests-entry").remove();
    $("#finish-guests-item").remove();
  
    // Add carousel indicator for finish guests
    $("#vertical-carousel ol").append(`
          <li id="finish-guests-entry" data-bs-target="#vertical-carousel" data-bs-slide-to="` + finishPagePosition + `"></li>
      `);
  
    // Add finish guests page
    $("#carousel-inner").append(`
          <div id="finish-guests-item" class="carousel-item">
              <div id="finish-guests-container" class="container" style="height: 100%;">
                    <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                      <div class="col-12 form_sec_outer_task text-center mt-2 mb-2">
                          <h4 class="frm_section_n fw-bold text-center mt-2 mb-0">Confirmar invitados</h4>
                      </div>
                    </div>
                    
                    <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 65%;">
                      <div class="col-12 form_field_outer">
                          <div id="finish-guests-content" class="row form_field_outer_row border rounded align-items-center pt-2 pb-2">
                          </div>
                      </div>
                    </div>
  
                    <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                      <div class="col-12 form_field_outer mb-3">
                          <div class="row justify-content-center">
                              <div class="col-12 mb-2 text-center">
                                  <input type="button" class="btn btn-light w-50" value="Reiniciar" onclick="resetGuestsContent()" />
                              </div>
  
                              <div class="col-12 mb-2 text-center">
                                  <input type="button" class="btn btn-light w-50" value="Actualizar" onclick="finishGuests()" />
                              </div>
  
                              <div class="col-12 text-center">
                              <input id="confirm-guests-button" type="button" class="btn btn-light w-50" value="Enviar" onclick="sendConfirmation()" />
                              </div>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      `);
  
    // Get values
    var guests = [];
    $('.guests').each(function() {
      guests.push($(this).val());
    });
  
    var hasError = false;
    for (let i = 0; i < guests.length; i++) {
      if (typeof guests[i] === 'undefined' || guests[i] == '') {
        hasError = true;
        break;
      }
    }
  
    if (hasError === true) {
      $("#confirm-guests-button").css("background-color", "#f8d7da");
      $("#confirm-guests-button").prop("disabled", true);
      $("#finish-guests-content").append(`
              <div class="form-group col-12 mb-1">
                  <p class="fw-bold mb-1">Invitados:</p>
                  <div class="alert alert-danger mb-1 p-2" role="alert">
                  No ha informado todos los invitados. Por favor informe los invitados que faltan y actualice la confirmación.
                  </div>
              </div>
          `);
    } else {
      $("#confirm-guests-button").css("background-color", "#d1e7dd");
      $("#confirm-guests-button").hover(function(e) {
        $(this).css("background-color", e.type === "mouseenter" ? "#dee2e6" : "#d1e7dd");
      });
      $("#finish-guests-content").append(`
              <div class="form-group col-12 mb-1">
                  <p class="fw-bold mb-1">Invitados:</p>
                  <div class="alert alert-success mb-1 p-2" role="alert">
                      Todos los invitados informados.
                  </div>
              </div>
          `);
    }
  
    var alergias = $('#allergic-item').find('textarea[id="alergias"]').val();
    if (typeof alergias !== 'undefined' && alergias != '') {
      $("#finish-guests-content").append(`
              <div class="form-group col-12 mb-1">
                  <p class="fw-bold mb-1">Alergias:</p>
                  <div class="alert alert-success mb-1 p-2" role="alert">
                      Alergias informadas.
                  </div>
              </div>
          `);
    } else {
      $("#finish-guests-content").append(`
              <div class="form-group col-12 mb-1">
                  <p class="fw-bold mb-1">Alergias:</p>
                  <div class="alert alert-warning mb-1 p-2" role="alert">
                      Sin alergias.
                  </div>
              </div>
          `);
    }
  
    var busIda = $('#allergic-item').find('select[id="busIda"]').val();
    if (busIda == 'Si') {
      $("#finish-guests-content").append(`
              <div class="form-group col-6 mb-1"">
                  <p class="fw-bold mb-1">Bus ida:</p>
                  <div class="alert alert-success mb-1 p-2" role="alert">
                      Si.
                  </div>
              </div>
          `);
    } else {
      $("#finish-guests-content").append(`
          <div class="form-group col-6 mb-1"">
              <p class="fw-bold mb-1">Bus ida:</p>
              <div class="alert alert-warning mb-1 p-2" role="alert">
                  No.
              </div>
          </div>
      `);
    }
  
    var busVuelta = $('#allergic-item').find('select[id="busVuelta"]').val();
    if (busVuelta == 'Si') {
      $("#finish-guests-content").append(`
              <div class="form-group col-6 mb-1"">
                  <p class="fw-bold mb-1">Bus vuelta:</p>
                  <div class="alert alert-success mb-1 p-2" role="alert">
                      Si.
                  </div>
              </div>
          `);
    } else {
      $("#finish-guests-content").append(`
          <div class="form-group col-6 mb-1"">
              <p class="fw-bold mb-1">Bus vuelta:</p>
              <div class="alert alert-warning mb-1 p-2" role="alert">
                  No.
              </div>
          </div>
      `);
    }
  
    $('#vertical-carousel').carousel('next');
  }
  
  function sendConfirmation() {
    // Get values
    var guests = [];
    $('.guests').each(function(index) {
      if (index === 0) {
        guests.push("- " + $(this).val() + "<br>");
      } else {
        guests.push(" " + $(this).val() + "<br>");
      }
    });
    var alergias = $('#allergic-item').find('textarea[id="alergias"]').val();
    var busIda = $('#allergic-item').find('select[id="busIda"]').val();
    var busVuelta = $('#allergic-item').find('select[id="busVuelta"]').val();
  
    if (typeof alergias === 'undefined' || alergias == '') {
      alergias = "Sin alergias";
    }
  
    Email.send({
      SecureToken: "b64a7a8f-996b-49b2-93fe-d854106a36bb",
      To: 'jblandon93@gmail.com',
      //To: 'mrico.dev@gmail.com',
      From: "miguel.rico.vazquez@gmail.com",
      Subject: "Nuevos invitados confirmados!!",
      Body: "- Invitados:<br>" + guests.join('- ') + ".<br><br>- Alergias: " + alergias + ".<br>- Bus ida: " + busIda + ".<br>- Bus vuelta: " + busVuelta
    }).then((response) => {
      return onSendEmail(response)
    });

    Email.send({
        SecureToken: "b64a7a8f-996b-49b2-93fe-d854106a36bb",
        To: 'isabenabat@gmail.com',
        //To: 'mrico.dev@gmail.com',
        From: "miguel.rico.vazquez@gmail.com",
        Subject: "Nuevos invitados confirmados!!",
        Body: "- Invitados:<br>" + guests.join('- ') + ".<br><br>- Alergias: " + alergias + ".<br>- Bus ida: " + busIda + ".<br>- Bus vuelta: " + busVuelta
      }).then((response) => {
        console.log("Correo enviado")
      });
  }
  
  function onSendEmail(response) {
    if (response === 'OK') {
      // Add carousel indicator for success
      $("#vertical-carousel ol").append(`
              <li id="success-entry" data-bs-target="#vertical-carousel" data-bs-slide-to="4" class="active"></li>
          `);
  
      // Add success page
      $("#carousel-inner").append(`
              <div id="success-item" class="carousel-item active">
                  <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 95%;">
                      <div class="col-12 form_sec_outer_task text-center">
                          <h2 class="card-title fw-bold text-center">Gracias por formar parte</h2>
                          <h2 class="card-title fw-bold text-center">de un día tan especial.</h2>
                      </div>
                  </div>
              </div>
          `);
  
      // Remove finish guests page component
      $("#select-guests-entry").remove();
      $("#select-guests-item").remove();
  
      $('#vertical-carousel').carousel(4);
      // Remove finish guests page component
      $("#finish-guests-entry").remove();
      $("#finish-guests-item").remove();
      // Remove first guests page component
      $("#guests-entry").remove();
      $("#guests-item").remove();
      // Remove second guests page component
      $("#guests-entry-2").remove();
      $("#guests-item-2").remove();
      // Remove allergic component
      $("#allergic-entry").remove();
      $("#allergic-item").remove();
      // Remove account component
      $("#account-entry").remove();
      $("#account-item").remove();
      // Remove timeline component
      $("#account-entry").remove();
      $("#account-item").remove();
      // Remove clock component
      $("#clock-entry").remove();
      $("#clock-item").remove();
  
      addOtherPages();
    } else {
      $("#send-email-error").append(`
              <div class="alert alert-danger" role="alert">
                  Se ha producido un error al enviar la confirmación. Por favor, intenteló de nuevo.
                  Error: ` + response + `
              </div>
          `);
    }
  }
  
  function addOtherPages() {  
    // Add carousel indicator for timeline
    $("#vertical-carousel ol").append(`
          <li id="timeline-entry" data-bs-target="#vertical-carousel" data-bs-slide-to="5"></li>
      `);
  
    // Add allergic page
    $("#carousel-inner").append(`
          <div id="timeline-item" class="carousel-item">
              <div class="container" style="height: 100%;">
                  <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 10%;">
                      <div class="col-12 form_sec_outer_task text-center mt-2 mb-2">                    
                          <h4 class="frm_section_n fw-bold text-center">Timeline</h4>
                      </div>
                  </div>
  
                  <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 75%;">
                      <div class="col-12 form_sec_outer_task text-center mt-2 mb-2">
                          <!-- timeline item 1 -->
                          <div class="row">
                              <!-- timeline item 1 left dot -->
                              <div class="col-auto text-center flex-column d-sm-flex">
                                  <div class="row">
                                      <div class="col">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                                  <h5 class="m-2">
                                      <span class="badge rounded-pill bg-light border">&nbsp;</span>
                                  </h5>
                                  <div class="row">
                                      <div class="col border-end order">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                              </div>
                              <!-- timeline item 1 event content -->
                              <div class="col py-2">
                                  <div class="card">
                                      <div class="card-body">
                                          <div class="float-end text-muted">18:30 PM</div>
                                          <h4 class="card-title text-muted">Ceremonia</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!--/row-->
                          <!-- timeline item 2 -->
                          <div class="row">
                              <div class="col-auto text-center flex-column d-sm-flex">
                                  <div class="row">
                                      <div class="col border-end">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                                  <h5 class="m-2">
                                      <span class="badge rounded-pill bg-light border">&nbsp;</span>
                                  </h5>
                                  <div class="row">
                                      <div class="col border-end">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                              </div>
                              <div class="col py-2">
                                  <div class="card shadow">
                                      <div class="card-body">
                                          <div class="float-end text-muted">21:00 PM</div>
                                          <h4 class="card-title text-muted">Recepción</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!--/row-->
                          <!-- timeline item 3 -->
                          <div class="row">
                              <div class="col-auto text-center flex-column d-sm-flex">
                                  <div class="row">
                                      <div class="col border-end">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                                  <h5 class="m-2">
                                      <span class="badge rounded-pill bg-light border">&nbsp;</span>
                                  </h5>
                                  <div class="row">
                                      <div class="col border-end">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                              </div>
                              <div class="col py-2">
                                  <div class="card">
                                      <div class="card-body">
                                          <div class="float-end text-muted">22:30 PM</div>
                                          <h4 class="card-title text-muted">Cena</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!--/row-->
                          <!-- timeline item 4 -->
                          <div class="row">
                              <div class="col-auto text-center flex-column d-sm-flex">
                                  <div class="row">
                                      <div class="col border-end">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                                  <h5 class="m-2">
                                      <span class="badge rounded-pill bg-light border">&nbsp;</span>
                                  </h5>
                                  <div class="row">
                                      <div class="col">&nbsp;</div>
                                      <div class="col">&nbsp;</div>
                                  </div>
                              </div>
                              <div class="col py-2">
                                  <div class="card">
                                      <div class="card-body">
                                          <div class="float-end text-muted">01:00 AM</div>
                                          <h4 class="card-title text-muted">Baile</h4>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!--/row-->
                      </div>
                  </div>
              </div>
          </div>
      `);
  
    // Add carousel indicator for clock
    $("#vertical-carousel ol").append(`
          <li id="clock-entry" data-bs-target="#vertical-carousel" data-bs-slide-to="6"></li>
      `);
  
    // Add account page
    $("#carousel-inner").append(`
          <div id="clock-item" class="carousel-item">
              <div class="container" style="height: 100%;">	

                  <div class="d-flex flex-wrap align-content-center justify-content-around" style="height: 85%;">
                      <div class="col-8 form_sec_outer_task text-center mt-2 mb-2">
                          <p id="demo"></p>
                          
                          <div class="rounded text-white shadow p-2 text-center mb-2">
                          <h4 class="frm_section_n fw-bold text-center">
                          Te esperamos en...
                          </h4>
                              <div id="clock-c" class="countdown py-4"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `);
  
    $('#clock-c').countdown(get15dayFromNow(), function(event) {
      var $this = $(this).html(event.strftime('' +
        '<span class="h1 font-weight-bold">%D</span> día%!d <br>' +
        '<span class="h1 font-weight-bold">%H</span> horas <br>' +
        '<span class="h1 font-weight-bold">%M</span> minutos <br>' +
        '<span class="h1 font-weight-bold">%S</span> segundos'));
    });
  }
  
  function get15dayFromNow() {
    return new Date("Jul 20, 2024 18:30:00");
  }