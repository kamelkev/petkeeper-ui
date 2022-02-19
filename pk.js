
var pk_api_base = '//35.222.32.211:8080/api/v1',
    dog_breeds  = ["Mixed Breed","Affenpinscher","Afghan Hound","African Boerboel","Ainu Dog","Airedale Terrier","Akita","Akita Mix","Alapaha Blue Blood Bulldog","Alaskan Husky","Alaskan Klee Kai","Alaskan Malamute","American Bandogge Mastiff","American Black & Tan Coonhound","American Bulldog","American Bully","American Cocker Spaniel","American English Coonhound","American Eskimo Dog","American Foxhound","American Hairless Terrier","American Mastiff","American Pit Bull Terrier","American Staffordshire Terrier","American Water Spaniel","Anatolian Shepherd","Appenzell Mountain Dog","Appenzeller Sennenhund","Ariegeois","Australian Cattle Dog","Australian Cattle Dog Mix","Australian Kelpie","Australian Shepherd","Australian Silky Terrier","Australian Terrier","Austrian Short Haired Pinscher","Auvergne Setter","Bagel","Banjara Greyhound","Barbet","Basenji","Basset Artesian Normand","Basset Griffon Vandeen","Basset Hound","Basset Hound Mix","Beabull","Beagle","Beagle Harrier","Beagle Mix","Bearded Collie","Beauce Shepherd","Beauceron","Bedlington Terrier","Belgian Laekenois","Belgian Malinois","Belgian Sheepdog","Belgian Shepherd","Belgian Shepherd Malinois","Belgian Shepherd Tervuren","Belgian Tervuren","Bernese Mountain Dog","Bichon Frise","Bichon Mix","Bichpoo","Black and Tan Coonhound","Black Mouth Cur","Black Russian Terrier","Blenheim & Prince Charles English Toy Spaniel","Bloodhound","Blue Heeler","Bluetick Coonhound","Boerboel","Bolognese","Border Collie","Border Collie Mix","Border Terrier","Borzoi","Boston Terrier","Bourbonnais Setter","Bouviers des Flandres","Boxer","Boxer Mix","Boykin Spaniel","Bracco Italiano","Braque Du Bourbonnais","Braque Francais","Brazilian Guard Dog","Briard","Brittany Spaniel","Broholmer","Brussels Griffon","Bugg","Bull Terrier","Bulldog (american)","Bulldog Mix","Bullmastiff","Bulloxer","Cairn Terrier","Canaan Dog","Canadian Husky","Canary Dog","Cane Corso","Cardigan Welsh Corgi","Catahoula Leopard Dog","Caucasian Mountain Dog","Cavachon","Cavalier King Charles Spaniel","Cavapoo","Central Asian Shepherd Dog","Cesky Terrier","Chesapeake Bay Retriever","Chihuahua","Chihuahua Mix","Chinese Crested","Chinook","Chiweenie","Chorkie","Chow Chow","Chow Chow Mix","Chug","Clumber Spaniel","Cockapoo","Cocker Spaniel","Cocker Spaniel Mix","Collie","Collie Mix","Coon Hound Mix","Coonhound","Corgi Mix","Coton de Tulear","Curly-Coated Retriever","Czechoslovakian Wolfdog","Dachshund","Dachshund Mix","Dalmatian","Dalmation Mix","Dandie Dinmont Terrier","Deerhound","Doberman Pinscher","Doberman Pinscher Mix","Dogue de Bordeaux","Dorgie","Elkhound","English Bull Terrier","English Bulldog","English Cocker Spaniel","English Coonhound","English Foxhound","English Mastiff","English Pointer","English Retriever","English Setter","English Springer Spaniel","English Toy Spaniel","English Toy Terrier","Entlebucher Mountain Dog","Eskimo Dog","Eurasier","Fell Terrier","Field Spaniel","Fila Brasileiro","Finnish Hound","Finnish Lapphund","Finnish Spitz","Flat-Coated Retriever","Fox Terrier","French Bulldog","French Mastiff","French Spaniel","Frenchie Pug","Frenchton","German Pinscher","German Shepherd Dog","German Shorthaired Pointer","German Spitz","German Wirehaired Pointer","Giant Schnauzer","Glen of Imaal Terrier","Golden Retriever","Goldendoodle","Gordon Setter","Grand Basset Griffon Vendeen","Great Bernese","Great Dane","Great Dane Mix","Great Pyrenees","Greater Swiss Mountain Dog","Greenland Dog","Greyhound","Hamiltonstovare","Harlequin Pinscher","Harrier","Havanese","Havashu","Hovawart","Hungarian Coarse-Haired Vizsla","Hungarian Greyhound","Hungarian Kuvasz","Hungarian Puli","Hungarian Vizsla","Husky","Husky Mix","Ibiizian Wolfhound","Ibizan Hound","Icelandic Sheepdog","Inca Hairless Dog","Irish Red and White Setter","Irish Red Setter","Irish Setter","Irish Terrier","Irish Water Spaniel","Irish Wolfhound","Italian Greyhound","Italian Mastiff","Italian Setter","Italian Spinone","Italian Spitz","Jack Russell Terrier","Jamthund","Japanese Akita","Japanese Chin","Japanese Fighting Dog","Japanese Kishu","Japanese Spitz","Japanese Terrier","Jindo","Jug","Kai Dog","Kai Ken","Kangal Dog","Karelian Bear Dog","Keeshonden (Keeshond)","Kerry Blue Terrier","King Charles & Ruby English Toy Spaniel","King Charles Spaniel","King Shepherd","Komondor","Koolie","Kuvasz","Labradoodle","Labrador Mix","Labrador Retriever","Lagotto Romagnolo","Laikas","Lakeland Terrier","Lancashire Heeler","Landseer","Lapland Spitz","Lapponian Herder","Large Munsterlander","Leonberger","Lhasa Apso","Lhasa Apso Mix","Llewellin Setter","Lowchen","Lundehund","Mal-Shi","Maltese","Maltipoo","Manchester Terrier","Mastiff","Mastiff Mix","Mexican Hairless","Mi Ki","Miniature American Eskimo","Miniature Australian Shepherd","Miniature Bull Terrier","Miniature Dachshund","Miniature Pinscher","Miniature Poodle","Miniature Schnauzer","Miniature Yorkie","Morkie","Mountain Cur","Mudi","Munsterlander","Neapolitan Mastiff","New Guinea Singing Dog","Newfoundland","Norfolk Terrier","Norrbottenspets","Northern Inuit Dog","Norwegian Buhund","Norwegian Elkhound","Norwich Terrier","Nova Scotia Duck Tolling Retriever","Old English Sheepdog","Olde English Bulldogge","Otterhound","Papillon","Parson Russell Terrier","Peekapoo","Pekingese","Pekingese Mix","Pembroke Welsh Corgi","Petit Basset Griffon Vendeen","Pharaoh Dog","Pit Bull Mix","Plott Hound","Pointer","Pointer Mix","Polish Lowland Sheepdog","Pomapoo","Pomeranian","Poodle (Standard)","Poodle Mix","Porkie","Portuguese Water Dog","Pug","Puggle","Puli","Pumi","Pyrenean Mastiff","Pyrenean Mountain Dog","Pyrenean Shepherd","Rat Terrier","Redbone Coonhound","Redtick Coonhound","Retriever Mix","Rhodesian Ridgeback","Rottweiler","Rottweiler Mix","Rough Collie","Russian Hounds","Saint Bernard","Saluki","Samoyed","Samoyed Mix","Schipperke","Schnauzer Mix","Schnoodle","Scottish Deerhound","Scottish Terrier","Sealyham Terrier","Segugio Italiano","Shar Pei Mix","Shar-Pei","Sharpoo","Shepherd Mix","Shetland Sheepdog","Shiba Inu","Shih Tzu","Shih-poo","Siberian","Siberian Husky","Siberian Husky Mix","Silken Windhound","Silky Terrier","Skye Terrier","Smooth Collie","Smooth Fox Terrier","Soft-Coated Wheaten Terrier","Spaniel Mix","Spanish Mastiff","Spanish Water Dog","Spinoni Italian","Spitz","Springer Spaniel","Staffordshire Bull Terrier","Staffordshire Terrier","Standard Manchester Terrier","Standard Poodle","Standard Schnauzer","Sussex Spaniel","Swedish Vallhund","Teacup Poodle","Teacup Yorkie","Terrier Mix","Thai Ridegeback","Tibetan Mastiff","Tibetan Spaniel","Tibetan Terrier","Toy Fox Terrier","Toy Maltese","Toy Manchester Terrier","Toy Poodle","Toy Schnauzer","Treeing Tennessee Brindle","Treeing Walker Coonhound","Victorian Bulldog","Vizsla","Vizsla Mix","Weimaraner","Welsh Springer Spaniel","Welsh Terrier","West Highland White Terrier","Wheaten Terrier","Whippet","Wire Fox Terrier","Wirehaired Pointing Griffon","Wolf Mix","Yorkiepoo","Yorkshire Terrier"],
    cat_breeds  = ["Mixed Breed","Domestic Long Hair","Domestic Short Hair","Domestic Medium Hair","Abyssinian","American Bobtail","American Curl","American Domestic","American Shorthair","American Wirehair","Angora","Ashera","Balinese","Bengal","Birman","Bombay","British Longhair","British Shorthair","Burmese","Burmilla","California Spangled","Chantilly / Tiffany","Chartreux","Chausie","Chinchilla","Colorpoint Shorthair","Cornish Rex","Cymric","Devon Rex","Donskoy","Dutch Rex","Egyptian Mau","European Burmese","European Shorthair","Exotic","German Rex","Habari","Havana Brown","Highlander","Himalayan","Japanese Bobtail","Javanese","Kashmir","Korat","La Perm","Maine Coon","Manx","Munchkin","Nebelung","Norwegian Forest Cat","Ocicat","Ojos Azules","Oriental","Persian","Peterbald","Pixiebob","Ragamuffin","Ragdoll","Russian Blue","Safari","Savannah","Scottish Fold","Selkirk Rex","Serengeti","Seychellois","Siamese","Siberian","Singapura","Snowshoe","Sokoke Forest","Somali","Sphynx","Thai","Tonkinese","Toyger","Turkish Angora","Turkish Van","York Chocolate"];

initPK();

function initPK() {
    var $body = $('body'),
        $form = $('form'),
        token = new PKCookie('access_token').getValues();

    if ('string' === typeof token) {
        loadPK({ 'access_token':token });
        return;
    }
    $('.login-panel').removeClass('d-none');
    $('form').on('submit', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $body.addClass('busy');
        $form.find('.alert').alert('close');
        $.ajax({
            type:        'POST',
            dataType:    'json',
            contentType: 'application/json; charset=utf-8',
            url:          pk_api_base +'/login',
            data:         JSON.stringify(kvs2obj($(e.currentTarget).serialize())),
            error:        function error(data, status, xhr) {
                $form.prepend('<div class="alert alert-danger fade show">We could not log you in successfully. Please check your login info and try again.</div>');
                setTimeout(function () { $form.find('.alert').alert('close'); }, 5000);
            },
            complete:     function complete() {
                $body.removeClass('busy');
            },
            success:      function success(data, status, xhr) {
                if (data && data.access_token) {
                    new PKCookie('access_token', data.access_token, {expires: (new Date().valueOf() + 3600000) }).setCookie(); // 1h expiry
                    loadPK(data);
                }
            }
        });
    });
}

function loadPK(tokens) {
    $('.login-panel').remove().find('form').off('submit');
    $('.app-panel').removeClass('d-none');
    var $body             = $('body'),
        $pet_list         = $('#pet_list'),
        $pet_name_fld     = $('#pet_name'),
        $pet_type_flds    = $('[name="type"]'),
        $pet_gender_flds  = $('[name="gender"]'),
        $pet_breed_fld    = $('#pet_breed'),
        $pet_birthday_fld = $('#pet_birthday'),
        $pet_age_fld      = $('#pet_age'),
        $pet_id_fld       = $('#pet_id'),
        $save_pet_btn     = $('#save_pet'),
        $open_btn         = $('button[data-target="#pet_modal"]'),
        item_pre_markup   = '<tr class="pet">'
                              + '<td width="59">',
        cat_img_markup    =         '<img src="images/fal-fa-cat.svg" alt="Cat" width="35" />',
        dog_img_markup    =         '<img src="images/fal-fa-dog.svg" alt="Dog" width="35" />',
        item_post_markup  =     '</td>'
                              + '<td>'
                                  + '<h5 class="mb-0 pet-name"></h5>'
                                  + '<div><span class="pet-age"></span> <span class="pet-breed"></span> (<span class="pet-type"></span>), <span class="pet-gender"></span></div>'
                              + '</td>'
                              + '<td class="text-right">'
                                  + '<button type="button" class="btn btn-link btn-sm text-primary edit-pet">Edit</button>'
                                  + '<button type="button" class="btn btn-link btn-sm text-primary delete-pet">Delete</button>'
                              + '</td>'
                          + '</tr>',
        item_cat_markup   = item_pre_markup + cat_img_markup + item_post_markup,
        item_dog_markup   = item_pre_markup + dog_img_markup + item_post_markup;

    $('.logout-btn').on('click', function (e) {
        new PKCookie('access_token', '', {expires: new Date().valueOf() }).setCookie();
        location.reload();
    });
    $save_pet_btn.on('click', function (e) { _upsertPet(); $('#pet_modal').modal('hide'); });
    $pet_list
        .on('click', '.edit-pet', _editPet)
        .on('click', '.delete-pet', _deletePet);
    $pet_type_flds
        .on('click', function (e) { $(e.currentTarget).trigger('change'); })
        .on('change', function (e) {
            var type   = e.currentTarget.value,
                breeds = 'cat' === type ? cat_breeds : dog_breeds;
            $pet_breed_fld.find('option').not('.unselected').remove();
            breeds.forEach(function (breed, i) { $pet_breed_fld.append('<option>'+ breed +'</option>'); });
        });

    // load initial pets
    $body.addClass('busy');
    $.ajax({
        type:        'GET',
        dataType:    'json',
        contentType: 'application/json; charset=utf-8',
        url:          pk_api_base +'/pets?token='+ tokens.access_token,
        error:        function error(data, status, xhr) {
            notify('The list of pets could not be retrieved. Please wait a minute and try again.');
        },
        complete:     function complete() {
            $body.removeClass('busy');
            $body.removeClass('login');
            $pet_list.removeClass('loading');
        },
        success:      function success(data, status, xhr) {
            if (!data || !data.length) return;
            data.sort(function (a, b) {
                var a_ms = new Date(a.birthday).valueOf(),
                    b_ms = new Date(b.birthday).valueOf();
                return a_ms < b_ms ? 1 : a_ms > b_ms ? -1 : 0;
            });
            data.forEach(function (d, i) {
                var $working_pet = $('cat' === d.type ? item_cat_markup : item_dog_markup).prop('id', 'pet_'+ d.pet_id).appendTo($pet_list),
                    age          = convertBirthdayToAge(d.birthday);

                d.age = age;
                $working_pet.data(d)
                    .find('.pet-name').text(d.name || '--').end()
                    .find('.pet-type').text(d.type || 'dog').end()
                    .find('.pet-gender').text(d.gender || 'male').end()
                    .find('.pet-breed').text(d.breed || 'mixed breed').end()
                    .find('.pet-age').text(age +' yr old');
            });
            $pet_list.toggleClass('empty', !$pet_list.children().length);
        }
    });


    // perform the XHR to update/insert a pet
    function _upsertPet() {
        var new_data    = { 'name':$pet_name_fld.val(), 'type':$pet_type_flds.filter(':checked').val(), 'gender':$pet_gender_flds.filter(':checked').val(), 'breed':$pet_breed_fld.val(), 'birthday':$pet_birthday_fld.val() || convertAgeToBirthday($pet_age_fld.val() || '0') },
            pet_id      = $pet_id_fld.val(),
            $curr_pet   = pet_id && $pet_list.find('#pet_'+ pet_id),
            old_data    = ($curr_pet && $curr_pet.data()) || {},
            merged_data = $.extend(old_data, new_data);

        delete merged_data.age;
        $pet_name_fld.val('');
        $pet_type_flds.prop('checked', false);
        $pet_gender_flds.prop('checked', false);
        $pet_breed_fld.find('option').not('.unselected').remove();
        $pet_age_fld.prop('disabled', false).val('');
        $pet_birthday_fld.val('');
        $pet_id_fld.val('');
        $save_pet_btn.text('Add');
        $body.addClass('busy');
        $.ajax({
            type:        pet_id ? 'PUT' : 'POST',
            dataType:    'json',
            contentType: 'application/json; charset=utf-8',
            url:          pk_api_base +'/pets'+ (pet_id ? '/'+ pet_id : '') +'?token='+ tokens.access_token,
            data:         JSON.stringify(merged_data),
            error:        function error(data, status, xhr) {
                notify('That pet could not be '+ (pet_id ? 'updated' : 'added') +'. Please check your info and try again.');
            },
            complete:     function complete() {
                $body.removeClass('busy');
            },
            success:      function success(data, status, xhr) {
                var $working_pet = pet_id ? $curr_pet : $('cat' === data.type ? item_cat_markup : item_dog_markup).prop('id', 'pet_'+ data.pet_id).prependTo($pet_list),
                    age          = convertBirthdayToAge(data.birthday);
                
                data.age = age;
                $working_pet.data(data)
                    .find('.pet-name').text(data.name).end()
                    .find('.pet-type').text(data.type).end()
                    .find('.pet-gender').text(data.gender).end()
                    .find('.pet-breed').text(data.breed).end()
                    .find('.pet-age').text(age +' yr old');
                $pet_list.toggleClass('empty', !$pet_list.children().length);
            }
        });
    }
    
    // open the modal to edit a pet
    function _editPet(e) {
        var $pet = $(e.currentTarget).closest('.pet'),
            data = $pet.data();

        if (data) {
            $pet_name_fld.val(data.name || '');
            $pet_type_flds.filter('[value="'+ (data.type || '') +'"]').prop('checked', true).trigger('change');
            $pet_gender_flds.filter('[value="'+ (data.gender || '') +'"]').prop('checked', true).trigger('change');
            $pet_breed_fld.val(data.breed || '');
            $pet_age_fld.val(convertBirthdayToAge(data.birthday) || '0').prop('disabled', true);
            $pet_birthday_fld.val(data.birthday || '');
            $pet_id_fld.val(data.pet_id || '');
            $save_pet_btn.text('Save');
        }
        $open_btn.trigger('click');
    }

    // open a modal to confirm deletion of a pet
    function _deletePet(e) {
        var $pet = $(e.currentTarget).closest('.pet'),
            data = $pet.data();

        if (!data || !data.pet_id) return;
        $body.addClass('busy');
        $.ajax({
            type:        'DELETE',
            dataType:    'json',
            contentType: 'application/json; charset=utf-8',
            url:          pk_api_base +'/pets/'+ data.pet_id +'?token='+ tokens.access_token,
            error:        function error(data, status, xhr) {
                notify('That pet could not be deleted. Please check your info and try again.');
            },
            complete:     function complete() {
                $body.removeClass('busy');
            },
            success:      function success(data, status, xhr) {
                $pet.remove();
                $pet_list.toggleClass('empty', !$pet_list.children().length);
            }
        });
    }
}

// utility: show a notification alert
function notify(message) {
    $('#pet_list').before('<div class="alert alert-danger fade show mt-4">'+ message +'</div>');
    setTimeout(function () { $('body').find('.alert').alert('close'); }, 5000);
}

// utility: process a birthday data string from the DB and return it rounded to number of years old
function convertBirthdayToAge(birthday) {
    var bday_date = new Date(birthday || null),
        age_in_ms = Date.now() - bday_date.valueOf(),
        age_in_yr = Math.round(age_in_ms / 31536000000);
    return age_in_yr;
}

// utility: take an age in number of years and convert to an approximate birthday
function convertAgeToBirthday(age) {
    var diff_in_ms = parseInt(age) * 31536000000,
        bday_in_ms = Date.now() - diff_in_ms;
    
    return new Date(bday_in_ms).toISOString();
}

// utility: convert a key-value string (like query string parameters) to a standard object
function kvs2obj(kvs) {
    if (!kvs) return;
    var roots = kvs.split('?'),
        pairs = roots[roots.length > 1 ? 1 : 0].split('&'),
        obj   = {};

    pairs.forEach(function(pair, i) {
        var parts = pair.split('='),
            key   = decodeURIComponent(parts.shift()),
            val   = decodeURIComponent(parts.join('=').replace(/\+/g, ' ')).replace(/^\s+|\s+$/g, '');

        if (/^\d$/.test(val))                                   val = parseInt(val, 10);
        else if (!isNaN(val) && !/e/.test(val) && ('' !== val)) val = Number(val); // don't evaluate exponential notation or empty strings
        else if ('true' === val)                                val = true;
        else if ('false' === val)                               val = false;
        // set single value
        if (undefined === obj[key]) obj[key] = val;
        // already an array
        else if ('[object Array]' === ({}).toString.call(obj[key])) obj[key].push(val);
        // needs to be an array
        else {
            var tmp_arr = [obj[key], val];
            obj[key] = tmp_arr;
        }
    });

    return obj;
}

// utility: convert an object to a key-value string like query string parameters
function obj2kvs(obj) {
    var parts = [],
        push  = function(key, val) {
            if (val !== null && (typeof val !== "undefined")) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
            }
            else {
                parts.push(encodeURIComponent(key) + '=');
            }
        };

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var val = obj[key];
            if (val instanceof Array) {
                for (var i=0, l=val.length; i<l; i++) { push(key, val[i]); }
            }
            else {
                push(key, val);
            }
        }
    }

    return parts.join('&');
}

// utility: convert an object to a URL-formatted key-value string
function obj2URL(obj, url) {
    url = url || '';
    var qs = (/\?/.test(url) ? '&' : '?') + obj2kvs(obj);

    return url + qs;
}

/*!
 * PKCookie
 */
/**
 * @class Returns an instance which can be used to for CRUD operations on a cookie.
 * @param {String} sName The name (or key) to use for the cookie
 * @param {String, Object} value What to store in the cookie
 * @param {Object} opts
 * @config {Object, String, Date} expires When does the cookie expire.
 * @config {String} domain (sub)domain to restrict cookie to
 * @config {String} path Path to restrict cookie to. No value defaults to '/';
 * @config {String} secure Is the cookie limited to https?
 * @config {Function} serialize Custom function to use to convert #value into a cookie-ready string
 * @config {Function} deserialize Custom function to use to convert the cookie string into an object
 * @config {Boolean} noload Skip loading values from existing cookie?
 * @return {PKCookie} instance
 * @type {Object}
 * @example new PKCookie('settings', {timezone: 'US-Eastern'}).setCookie();
 * @example new PKCookie('played', 'false').setCookie();
 * @example new PKCookie('played', 'true', {expires: new Date('01/01/2020')}).setCookie();
 * @example var settings = new PKCookie('settings', {foo: 'bar'});
 * settings.set('timezone', 'US-Eastern');
 * setting.setCookie();
 * @example var settings = new PKCookie('settings', {foo: 'bar'});
 */
function PKCookie(sName, value, opts) {
    if (!(this instanceof PKCookie)) return new PKCookie(sName, value, opts);
    var instance  = this,
        oEmpty    = {},
        sv_key    = '__single-value__',
        oValues   = ("string" === typeof value) ? (oEmpty[sv_key] = value, oEmpty) : value,
        defaults  = {
            escape: false,
            expires: undefined,
            domain: undefined,
            path: '/',
            secure: false,
            serialize: serialize,
            deserialize: deserialize,
            noload: false
        },
        config    = $.extend(defaults, (opts || {})),
        curr_vals = getValuesFromCookieString() || {};

    if (!config.noload) oValues = $.extend(curr_vals, oValues);

    /**#@+ @public */
    /** @property {String, Number, Date} expires */
    this.expires = config.expires;

    /** @property {String} domain */
    this.domain = config.domain;

    /** @property {String} path */
    this.path = config.path;

    /** @property {Boolean} secure */
    this.secure = config.secure;


    /**
     * Sets key to value internally
     * @param {Object} key
     * @param {Object} value
     * @return {PKCookie} instance
     * @type {Object}
     */
    this.set = function (key, value) {
        if (sv_key in oValues) {
            oValues[sv_key] = key;
        }
        else {
            oValues[key] = value;
        }

        return instance.setCookie(); // allows chaining
    };

    /**
     * Returns the value stored for key in the internal structure {oValues}
     * @param {String} key
     * @return {String} value
     */
    this.get = function (key) {
        if (sv_key in oValues) {
            return oValues[sv_key];
        }
        else if (key) {
            return oValues[key];
        }
        else return oValues;
    };

    /**
     * Deletes the given key from the cookie
     * @param {String} key
     * @return {PKCookie} instance
     * @type {Object}
     */
    this.del = function (key) {
        delete oValues[key];

        return instance.setCookie();
    };

    /**
     * Serializes values object and sets the cookie in the browser
     * @return {PKCookie} instance
     * @type {Object}
     */
    this.setCookie = function () {
        var parts   = [ [ sName, getValueString()] ],
            expires = getDateString();

        if (expires)       { parts.push(['expires', expires]); }
        if (instance.domain) { parts.push(['domain', instance.domain]); }
        if (instance.path) { parts.push(['path', instance.path]); }

        var cookie_string = parts.map(function (arr) { return arr.join('='); }).join('; ');

        if (config.secure) { cookie_string += '; secure'; }

        document.cookie = cookie_string;

        return instance; // allows chaining
    };

    /**
     * Return the internal object which stores the values to be serialized
     * @return {Object} oValues
     */
    this.getValues = function () {
        return (sv_key in oValues) ? oValues[sv_key] : oValues;
    };
    /**#@+ @private */

    /**
     * @return {Object} of key/value pairs for *currently set* cookie
     */
    function getValuesFromCookieString() {
        var aCookies = document.cookie.split('; '),
            rCookie  = {},
            oCookie;

        for (var i = 0, l = aCookies.length; i < l; i++) {
            var sCookie   = aCookies[i],
                matches   = sCookie.match(/^(.+?)=(.+)$/);

            if (matches) {
                var cookieID  = matches[1],
                    cookieVal = unescape(matches[2]);

                if (cookieID === sName) {
                    oCookie = config.deserialize(cookieVal);
                    for (var p in oCookie) {
                        rCookie[p] = oCookie[p];
                    }
                }
            }
        }

        return rCookie;
    }

    /**
     * @return {String} serialized string of cookie values
     */
    function getValueString() {
        if (sv_key in oValues) {
            return oValues[sv_key];
        }
        else {
            return config.serialize(oValues);
        }
    }

    /**
     * @return {String} UTC Date string appropriate for cookie
     */
    function getDateString() {
        if ((/GMT|UTC/i).test(instance.expires) ||
            (/\//).test(instance.expires)){
            return new Date(instance.expires).toUTCString();
        }
        else if ("number" === typeof instance.expires) {
            return new Date(instance.expires).toUTCString();
        }
        else if (instance.expires instanceof Date) {
            return instance.expires.toUTCString();
        }

        return;
    }

    /**
     * @param {Object} obj
     */
    function serialize(obj) {
        var str = JSON ? JSON.stringify(obj) : obj2URL(obj);
        if (config.escape) str = escape(str);
        return str;
    }

    /**
     * @param {String} str
     */
    function deserialize(str) {
        var pairs           = str.replace(/.*\?/, '').split('&'),
            is_kvs          = (/\=/).test(pairs),     // looks likes a query string
            is_json         = (/\{/).test(str[0]),    // looks like an object
            is_escaped_json = (/\%7B/i).test(str[0]), // looks like an object
            obj             = {};

        if (is_kvs) {
            obj = kvs2obj(str);
        }
        // looks like an object
        else if (is_json || is_escaped_json){
            if (is_escaped_json) str = unescape(str);
            obj = JSON ? JSON.parse(str) : eval( '('+ str +')' );
        }
        // looks like a simple value
        else {
            obj[sv_key] = pairs[0];
        }

        return obj;
    }
    /**#@- */

    return this;
}; // eo PKCookie constructor
