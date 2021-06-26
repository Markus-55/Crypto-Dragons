async function removeOffers() {
  let allOffers = await marketplaceInstance.methods.getAllTokenOnSale().call();
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();

  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    let offerData = await marketplaceInstance.methods.getOffer(id).call();

    getIdToRemove(id, offerData).catch(error => console.log(error));
  }
}

async function getIdToRemove(id, offerData) {
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();
  controlFunctionRemoveOffers(dragonData, id, offerData);
}

function controlFunctionRemoveOffers(dragonData, id, offerData) {
  dragonRemoveHtml(id, offerData);

  let dnaObject = dragonObj(dragonData);

  renderActiveDragons(dnaObject, id);
}

function dragonObj(dragonData) {
  let genes = dragonData.genes.split('');

  let storedDragonsObj = {
    // Dna dragon colors
    headBodyColor: genes[0] + genes[1],
    wingsTailColor: genes[2] + genes[3],
    legsArmsColor: genes[4] + genes[5],
    eyesColor: genes[6] + genes[7],
    // Dna dragon attributes
    eyeShape: genes[8],
    hornShape: genes[9],
    topHornsColor: genes[10] + genes[11],
    sideHornsColor: genes[12] + genes[13],
    animation: genes[14],
    lastNum: genes[15]
  }

  //console.log(storedDragonsObj)
  return storedDragonsObj;
}

function renderActiveDragons(dnaObject, id) {
  let eyeShapeNum = parseInt(dnaObject.eyeShape);
  let hornShapeNum = parseInt(dnaObject.hornShape);
  let animationNum = parseInt(dnaObject.animation);

  headBodyColor(colors[dnaObject.headBodyColor], dnaObject.headBodyColor, id);

  wingsTailColor(colors[dnaObject.wingsTailColor], dnaObject.wingsTailColor, id);

  legsArmsColor(colors[dnaObject.legsArmsColor], dnaObject.legsArmsColor, id);

  eyesColor(colors[dnaObject.eyesColor], dnaObject.eyesColor, id);

  eyeVariation(eyeShapeNum, animationNum, id);

  hornVariation(hornShapeNum, animationNum, id);

  topHornsColor(colors[dnaObject.topHornsColor], dnaObject.topHornsColor, id);

  sideHornsColor(colors[dnaObject.sideHornsColor], dnaObject.sideHornsColor, id);

  if(animationNum === 5) {
    eyeAnimationVariations(eyeShapeNum, id);
  }
  else {
    animationVariations(animationNum, hornShapeNum, id);
  }

  specialNum(dnaObject.lastNum, id);
}

async function dragonRemoveHtml(id, offerData) {
  let offerStr =
  `<div class="col-xl-3 col-lg-4 col-sm-6" id="dragonId${id}">
    <div id="removeDragonBox">
      <div id="idDragon">Dragon ID: ${id}</div>
      <div id="myDragon">
        <div id="rightWing">
          <div class="wings rightWingPart1"></div>
          <div class="wings rightWingPart2"></div>
          <div class="wings rightWingPart3"></div>
          <div class="wings rightWingPart4"></div>
        </div>
        <div id="leftWing">
          <div class="wings leftWingPart1"></div>
          <div class="wings leftWingPart2"></div>
          <div class="wings leftWingPart3"></div>
          <div class="wings leftWingPart4"></div>
        </div>
        <div id="tail">
          <div class="tailScale tailScale1"></div>
          <div class="tailScale tailScale2"></div>
          <div class="tailScale tailScale3"></div>
          <div class="tailScale tailScale4"></div>
          <div class="tailScale tailScale5"></div>
          <div class="tailScale tailScale6"></div>
          <div class="tailScale tailScale7"></div>
          <div class="tailScale tailScale8"></div>
          <div class="tailScale tailScale9"></div>
          <div class="tailScale tailScale10"></div>
          <div class="tailScale tailScale11"></div>
          <div class="tailScale tailScale12"></div>
          <div class="tailScale tailScale13"></div>
          <div class="tailScale tailScale14"></div>
          <div class="tailScale tailScale15"></div>
          <div class="tailScale tailScale16"></div>
          <div class="tailScale tailScale17"></div>
          <div class="tailScale tailScale18"></div>
          <div class="tailScale tailScale19"></div>
          <div class="tailScale tailScale20"></div>
          <div class="tailScale tailScale21"></div>
          <div class="tailScale tailScale22"></div>
          <div class="tailScale tailScale23"></div>
          <div class="tailScale tailScale24"></div>
          <div class="tailScale tailScale25"></div>
          <div class="tailScale tailScale26"></div>
          <div class="tailScale tailScale27"></div>
          <div class="tailScale tailScale28"></div>
          <div class="tailScale tailScale29"></div>
          <div class="tailScale tailScale30"></div>
          <div class="tailScale tailScale31"></div>
          <div class="tailScale tailScale32"></div>
          <div class="tail tailPart1"></div>
          <div class="tail tailPart2"></div>
          <div class="tail tailPart3"></div>
          <div class="tail tailPart4"></div>
          <div class="tail tailPart5"></div>
          <div class="tail tailPart6"></div>
          <div class="tail tailPart7"></div>
          <div class="tailEnd tailEnd1"></div>
          <div class="tailEnd tailEnd2"></div>
        </div>
        <div id="body">
          <div class="feet rightFoot"></div>
          <div class="feet leftFoot"></div>
          <div class="legs rightLeg"></div>
          <div class="legs leftLeg"></div>
          <div class="arms rightArm"></div>
          <div class="arms leftArm"></div>
          <div class="hand handPart1"></div>
          <div class="hand handPart2"></div>
          <div class="hand handPart3"></div>
          <div class="hand handPart4"></div>
          <div class="scales armScales scale11"></div>
          <div class="scales armScales scale12"></div>
          <div class="scales armScales scale13"></div>
          <div class="scales armScales scale14"></div>
          <div class="scales armScales scale15"></div>
          <div class="scales armScales scale16"></div>
          <div class="scales bodyScales scale17"></div>
          <div class="scales bodyScales scale18"></div>
          <div class="scales bodyScales scale19"></div>
        </div>
        <div class="ears rightEar"></div>
        <div class="ears leftEar"></div>
        <div class="topHorns topRightHorn"></div>
        <div class="topHorns topLeftHorn"></div>
        <div class="sideHorns sideRightHorn1"></div>
        <div class="sideHorns sideRightHorn2"></div>
        <div class="sideHorns sideLeftHorn1"></div>
        <div class="sideHorns sideLeftHorn2"></div>
        <div id="head">
          <div class="scales headScales scale1"></div>
          <div class="scales headScales scale2"></div>
          <div class="scales headScales scale3"></div>
          <div class="scales headScales scale4"></div>
          <div class="scales headScales scale5"></div>
          <div class="scales headScales scale6"></div>
          <div class="scales headScales scale7"></div>
          <div class="scales headScales scale8"></div>
          <div class="scales headScales scale9"></div>
          <div class="scales headScales scale10"></div>
          <div class="eyes rightEye">
            <div class="pupils">
              <div class="innerPupils"></div>
            </div>
          </div>
          <div class="eyes leftEye">
            <div class="pupils">
              <div class="innerPupils"></div>
            </div>
          </div>
          <div class="nose nostril1"></div>
          <div class="nose nostril2"></div>
          <div class="mouth mouthPart1"></div>
          <div class="mouth mouthPart2"></div>
          <div class="mouth mouthPart3"></div>
          <div class="mouth mouthPart4"></div>
          <div class="mouth mouthPart5"></div>
          <div class="mouth mouthPart6"></div>
          <div class="mouth mouthPart7"></div>
          <div class="teeth tooth1"></div>
          <div class="teeth tooth2"></div>
        </div>
      </div>
    </div>
    <ul class="dragonInfo">
      <li id="offerPrice">Price: ${offerData.price}</li>
    </ul>
    <button type="button" class="btn btn-warning removeOffer">Remove offer</button>
  </div>`;

  //console.log(offerStr);
  $(`#dragonId${0}`).remove();
  $(".myOffers").click(() => {
    $("#myOffersModal").modal();
  });

  if(!offerData.active) {
    $(`.myOffersBody #dragonId${id}`).remove();
  }
  else {
    $(`.myOffersBody #dragonId${id}`).remove();
    $(".myOffersBody").prepend(offerStr);
  }

  $(`#dragonId${id} > .removeOffer`).click(() => {

    marketplaceInstance.methods.removeOffer(id).send({}, (error, txHash) => {
      if(error) {
        console.log(error);
        $("#myOffersModal").modal("hide");

        $("#sellOrRemoveModal").modal();
        $("#sellOrRemoveTitle").html("Error: transaction failed!").css("color", "#ad2424");
        $(".sellOrRemoveBody").html(`Failed to send transaction: ${error.message}`).css("color", "#ad2424");
      }
      else {
        console.log(txHash);
        $("#myOffersModal").modal("hide");

        $("#sellOrRemoveModal").modal();
        $("#sellOrRemoveTitle").html("Offer successfully removed!").css("color", "#007400");
        $(".sellOrRemoveBody").html(`<p>Transaction hash: <br>${txHash}</p>`).css("color", "#007400");

        $(".sellOrRemoveClose").click(() => location.reload());
      }
    });
  });
}