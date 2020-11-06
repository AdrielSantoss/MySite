
 $('#articles-content').removeClass().addClass('hide')
 $('#notes-content').removeClass().addClass('hide')
 $('#myEnglish-name').removeClass().addClass('project-name-opacity')

 $('#articles').click(function(){
     $('#articles-content').removeClass().addClass('project-content-articles')
     $('#myEnglish-content').removeClass().addClass('hide')
     $('#notes-content').removeClass().addClass('hide')
     $('#articles-name').removeClass().addClass('project-name-opacity')
     $('#myEnglish-name').removeClass().addClass('project-name')
     $('#notes-name').removeClass().addClass('project-name')

 })
 
 $('#myEnglish').click(function(){
     $('#articles-content').removeClass().addClass('hide')
     $('#myEnglish-content').removeClass().addClass('project-content-myEnglish')
     $('#notes-content').removeClass().addClass('hide')
     $('#articles-name').removeClass().addClass('project-name')
     $('#myEnglish-name').removeClass().addClass('project-name-opacity')
     $('#notes-name').removeClass().addClass('project-name')


 })

 $('#notes').click(function(){
     $('#articles-content').removeClass().addClass('hide')
     $('#myEnglish-content').removeClass().addClass('hide')
     $('#notes-content').removeClass().addClass('project-content-notes')
     $('#articles-name').removeClass().addClass('project-name')
     $('#myEnglish-name').removeClass().addClass('project-name')
     $('#notes-name').removeClass().addClass('project-name-opacity')

 })


//Tecnologias

$('#node-content').addClass('hide')
$('#angular-content').addClass('hide')
$('#vue-content').addClass('hide')
$('#php-content').addClass('hide')
$('#BeJ-content').addClass('hide')
$('#react-name').removeClass().addClass('project-name-opacity')


$('#node').click(function(){
    $('#node-content').removeClass().addClass('show')
    $('#angular-content').removeClass().addClass('hide')
    $('#vue-content').removeClass().addClass('hide')
    $('#php-content').removeClass().addClass('hide')
    $('#BeJ-content').removeClass().addClass('hide')
    $('#react-content').removeClass().addClass('hide')

    $('#node-name').removeClass().addClass('project-name-opacity')
    $('#react-name').removeClass().addClass('project-name')
    $('#angular-name').removeClass().addClass('project-name')
    $('#vue-name').removeClass().addClass('project-name')
    $('#php-name').removeClass().addClass('project-name')
    $('#BeJ-name').removeClass().addClass('project-name')

})

$('#php').click(function(){
    $('#node-content').removeClass().addClass('hide')
    $('#angular-content').removeClass().addClass('hide')
    $('#vue-content').removeClass().addClass('hide')
    $('#php-content').removeClass().addClass('show')
    $('#BeJ-content').removeClass().addClass('hide')
    $('#react-content').removeClass().addClass('hide')

    $('#node-name').removeClass().addClass('project-name')
    $('#react-name').removeClass().addClass('project-name')
    $('#angular-name').removeClass().addClass('project-name')
    $('#vue-name').removeClass().addClass('project-name')
    $('#php-name').removeClass().addClass('project-name-opacity')
    $('#BeJ-name').removeClass().addClass('project-name')

})

$('#angular').click(function(){
    $('#node-content').removeClass().addClass('hide')
    $('#angular-content').removeClass().addClass('show')
    $('#vue-content').removeClass().addClass('hide')
    $('#php-content').removeClass().addClass('hide')
    $('#BeJ-content').removeClass().addClass('hide')
    $('#react-content').removeClass().addClass('hide')

    
    $('#node-name').removeClass().addClass('project-name')
    $('#react-name').removeClass().addClass('project-name')
    $('#angular-name').removeClass().addClass('project-name-opacity')
    $('#vue-name').removeClass().addClass('project-name')
    $('#php-name').removeClass().addClass('project-name')
    $('#BeJ-name').removeClass().addClass('project-name')
})

$('#BeJ').click(function(){
    $('#node-content').removeClass().addClass('hide')
    $('#angular-content').removeClass().addClass('hide')
    $('#vue-content').removeClass().addClass('hide')
    $('#php-content').removeClass().addClass('hide')
    $('#BeJ-content').removeClass().addClass('show')
    $('#react-content').removeClass().addClass('hide')

    $('#node-name').removeClass().addClass('project-name')
    $('#react-name').removeClass().addClass('project-name')
    $('#angular-name').removeClass().addClass('project-name')
    $('#vue-name').removeClass().addClass('project-name')
    $('#php-name').removeClass().addClass('project-name')
    $('#BeJ-name').removeClass().addClass('project-name-opacity')
})

$('#vue').click(function(){
    $('#node-content').removeClass().addClass('hide')
    $('#angular-content').removeClass().addClass('hide')
    $('#vue-content').removeClass().addClass('show')
    $('#php-content').removeClass().addClass('hide')
    $('#BeJ-content').removeClass().addClass('hide')
    $('#react-content').removeClass().addClass('hide')

    
    $('#node-name').removeClass().addClass('project-name')
    $('#react-name').removeClass().addClass('project-name')
    $('#angular-name').removeClass().addClass('project-name')
    $('#vue-name').removeClass().addClass('project-name-opacity')
    $('#php-name').removeClass().addClass('project-name')
    $('#BeJ-name').removeClass().addClass('project-name')
})

$('#react').click(function(){
    $('#node-content').removeClass().addClass('hide')
    $('#angular-content').removeClass().addClass('hide')
    $('#vue-content').removeClass().addClass('hide')
    $('#php-content').removeClass().addClass('hide')
    $('#BeJ-content').removeClass().addClass('hide')
    $('#react-content').removeClass().addClass('show')

    $('#node-name').removeClass().addClass('project-name')
    $('#react-name').removeClass().addClass('project-name-opacity')
    $('#angular-name').removeClass().addClass('project-name')
    $('#vue-name').removeClass().addClass('project-name')
    $('#php-name').removeClass().addClass('project-name')
    $('#BeJ-name').removeClass().addClass('project-name')
})

