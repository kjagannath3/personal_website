<script>
    import Navbar from "./Navbar.svelte";
</script>

<Navbar />
<h2 class="big-title">My Education</h2>

<div class="content">
    <div class ="text-picture-container">
        <div class="text-container">
            <p class="content-title">Georgia Tech</p>          
            <p>
                I am an undergraduate senior at Georgia Institute of Technology, pursuing a Bachelor of Science in Computer Science.
                While my coursework spans most areas in the field, my biggest interests are in machine learning, backend development, and 
                smaller computing units.
                I am fascinated by the idea of packaging the most innovative ml models, and deploying them into scenarios with limited computing power. 
                I am also interested in the intersection of software, and machine learning, and am currently working on a personal project to create a synthesizer in C.
                
            </p>
        </div>
            <div class="image-container">

				<img class ="gt-logo" src="gtlogo.png" alt="headshot" height="178px" width="283px">
            </div>
    </div>


    <div class ="text-picture-container">
        <div class="text-container">
            <p class="content-title">Berklee College of Music</p>
            <p>
                I am also persuing a certificate in general music studies from the Berklee College of Music, where I will focus on music technology, digital sound processing,
                and sound design. My dream project, given unlimited resources, would be to create the ultimate digital audio workstation, with a focus on live performance. The material
                I am learning at Berklee is invaluable to this endeavor.
            </p>
        </div>
            <div class="image-container">

				<img class ="gt-logo" src="berklee-logo.png" alt="headshot" height="200px" width="200px">
            </div>
    </div>
</div>



