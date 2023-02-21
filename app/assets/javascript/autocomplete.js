/* ---------- REASONABLE ADJUSTMENTS ---------- */

$(function() {
  $.widget("custom.catcomplete", $.ui.autocomplete, {
    _create: function() {
      this._super();
      this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function(ul, items) {
      var that = this,
        currentCategory = "";
      $.each(items, function(index, item) {
        var li;
        if (item.category != currentCategory) {
          ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
          currentCategory = item.category;
        }
        li = that._renderItemData(ul, item);
        if (item.category) {
          li.attr("aria-label", item.category + " : " + item.label);
        }
      });
    }
  });
  var flags = [{
      label: "Does lip read",
      category: "Communication support"
    },
    {
      label: "Does use communication device",
      category: "Communication support"
    },
    {
      label: "Does use hearing aid",
      category: "Communication support"
    },
    {
      label: "Preferred method of communication: written",
      category: "Communication support"
    },
    {
      label: "Uses a citizen advocate",
      category: "Communication support"
    },
    {
      label: "Uses a legal advocate",
      category: "Communication support"
    },
    {
      label: "Uses alternative communication skill",
      category: "Communication support"
    },
    {
      label: "Uses British Sign Language",
      category: "Communication support"
    },
    {
      label: "Uses cued speech transliterator",
      category: "Communication support"
    },
    {
      label: "Uses Deafblind Manual Alphabet",
      category: "Communication support"
    },
    {
      label: "Uses electronic note taker",
      category: "Communication support"
    },
    {
      label: "Uses lipspeaker",
      category: "Communication support"
    },
    {
      label: "Uses Makaton sign language",
      category: "Communication support"
    },
    {
      label: "Uses manual note taker",
      category: "Communication support"
    },
    {
      label: "Uses personal audio recording device to record information",
      category: "Communication support"
    },
    {
      label: "Uses Personal Communication Passport",
      category: "Communication support"
    },
    {
      label: "Uses sign language",
      category: "Communication support"
    },
    {
      label: "Uses speech to text reporter",
      category: "Communication support"
    },
    {
      label: "Uses telecommunications device for the deaf",
      category: "Communication support"
    },
    {
      label: "British Sign Language interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Hands-on signing interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Makaton Sign Language interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Needs an advocate",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind block alphabet interpreter",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind communicator guide",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind haptic communication interpreter",
      category: "Requires communication professional"
    },
    {
      label: "Requires deafblind manual alphabet interpreter",
      category: "Requires communication professional"
    },
    {
      label: "Requires lipspeaker",
      category: "Requires communication professional"
    },
    {
      label: "Requires manual note taker",
      category: "Requires communication professional"
    },
    {
      label: "Requires sighted guide",
      category: "Requires communication professional"
    },
    {
      label: "Requires speech to text reporter",
      category: "Requires communication professional"
    },
    {
      label: "Sign Supported English interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Visual frame sign language interpreter needed",
      category: "Requires communication professional"
    },
    {
      label: "Requires audible alert",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by email",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by letter",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by short message service text message",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by telephone",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact by text relay",
      category: "Requires specific contact method"
    },
    {
      label: "Requires contact via carer",
      category: "Requires specific contact method"
    },
    {
      label: "Requires tactile alert",
      category: "Requires specific contact method"
    },
    {
      label: "Requires visual alert",
      category: "Requires specific contact method"
    }
  ];

  $("#ra-flags").catcomplete({
    delay: 0,
    source: flags
  });

  var numFlags = $(".added-ra-flag").length;
  $('.adjustments-floater').html("Adjustments added: " + numFlags);

  $('#select-ra-flag-btn').click(function(e) {
    var flagVal = $("#ra-flags").val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    $(".modal-flag-category").text(catVal);
    $(".modal-flag-desc").text(flagVal);
    $("#ra-flags").val("");
  });

  var adjustmentsList = [];

  $('#add-ra-flag-btn').click(function(e) {
    var flagVal = $(".modal-flag-desc").text();
    var catVal = $(".modal-flag-category").text();
    var infoVal = $("#ra-supporting-info").val();
    var numFlags = $(".added-ra-flag").length;
    if (infoVal == "") {
      var infoVal = "No supporting information added"
    } else {
      var infoVal = $("#ra-supporting-info").val();
    }
    if (flagVal != "" && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='ra-support-info'>" + infoVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
      var numFlags = $(".added-ra-flag").length;
    } else if (flagVal != "") {
      $('.no-adjustments-placeholder').hide();
      $(".added-adjustments-list").append("<div class='added-ra-flag'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='ra-support-info'>" + infoVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
    }
    $("#ra-supporting-info").val("");
    adjustmentsList.push(catVal + " | " + flagVal + " | " + infoVal);
    sessionStorage.setItem("adjustmentsList", JSON.stringify(adjustmentsList));
  });


  $(document).on('click', '.remove-flag-link', function() {
    var numFlags = $(".added-ra-flag").length;
    if (numFlags === 1) {
      $('.no-adjustments-placeholder').show();
      $(this).parent().parent().remove();
    } else {
      $(this).parent().parent().remove();
    }
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("Adjustments added: " + numFlags);
  });

  var numFlags = $(".added-ra-flag").length;

  $(":checkbox").change(function() {
    var flagVal = $(this).val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    var trimFlag = flagVal.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
    $(".modal-flag-category").text(catVal);
    $(".modal-flag-desc").text(flagVal);
  });

  /*$(":checkbox").change(function() {
    var flagVal = $(this).val();
    var catVal = (flags.find(x => x.label === flagVal).category);
    var trimFlag = flagVal.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
    var numFlags = $(".added-ra-flag").length;
    var checkedBoxesLength = ($(":checkbox:checked").length);
    if (checkedBoxesLength > 0) {
      $('.no-adjustments-placeholder').hide();
    } else {
      $('.no-adjustments-placeholder').show();
    }
    if (this.checked && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top' id=" + trimFlag + "><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
    } else if (this.checked) {
      $(".added-adjustments-list").append("<div class='added-ra-flag' id=" + trimFlag + "><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
    } else {
      $("#" + trimFlag).remove();
    }
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("<a href='#added-adjustments-container'>Adjustments added: " + numFlags + "</a>");
  });*/

  $('#add-bespoke-flag-btn').click(function() {
    var flagVal = $("#bespoke-flags").val();
    var catVal = "Bespoke Adjustment";
    var numFlags = $(".added-ra-flag").length;
    if (flagVal != "" && numFlags > 0) {
      $(".added-adjustments-list").append("<div class='added-ra-flag added-ra-flag-border-top'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
      var numFlags = $(".added-ra-flag").length;
    } else if (flagVal != "") {
      $('.no-adjustments-placeholder').hide();
      $(".added-adjustments-list").append("<div class='added-ra-flag'><span class='flag-category'>" + catVal + "</span><span class='flag-desc'>" + flagVal + "</span><span class='remove-flag-container'><a href='#' class='remove-flag-link'>Remove</a></span></div>");
      $("#ra-flags").val("");
    }
    $("#bespoke-flags").val('');
    var numFlags = $(".added-ra-flag").length;
    $('.adjustments-floater').html("Adjustments added: " + numFlags);
  });

});

$(function() {
  var adjustmentsList = JSON.parse(sessionStorage.getItem("adjustmentsList"));
  var arrayLength = adjustmentsList.length;
  if (arrayLength >= 1) {
    $(".no-adjustments-added-text").hide();
  }
  for (i = 0; i < arrayLength; i++) {
    var adjustmentArray = adjustmentsList[i].split('|');
    $('<div class="scra-card-content"><div class="nhsuk-grid-row"><div class="nhsuk-grid-column-three-quarters nhsuk-u-three-quarters-tablet"><div class="card-content-section"><h4 class="nhsuk-heading-s"><span class="nhsuk-caption-s nhsuk-caption--bottom">' + adjustmentArray[0] + '</span><span role="text">' + adjustmentArray[1] + '</span></h4><h5 class="nhsuk-heading-xs"><span role="text">Supporting information:</span><span class="nhsuk-caption-m nhsuk-caption--bottom">' + adjustmentArray[2] + '</span></h5><p class="nhsuk-body-s">Added: 26-Apr-2019 by James Smith (GO) at Leeds Teaching Hospitals NHS Trust</p></div></div><div class="nhsuk-grid-column-one-quarter nhsuk-u-one-quarter-tablet"><a href="ra-step-3" class="nhsuk-button nhsuk-button--blue ra-edit">Edit</a><a href="ra-step-3" class="nhsuk-button nhsuk-button--red ra-delete">Delete</a></div></div></div>').appendTo($("#added-adjustments-summary"));
  }
});
