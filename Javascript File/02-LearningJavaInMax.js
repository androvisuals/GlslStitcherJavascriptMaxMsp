autowatch = 1;

inlets =2;
outlets = 2;

var mergedFilePath = jsarguments[1];
//this listens for a function called foo and posts a b c to the max console
function foo (a,b,c)
{
	post();
	post (a,b,c);
}

//this is used for an
function msg_int(a)
{
	post();
	post(a);
}
function msg_float(a)
{
	post();
   post(a);
}
//this returns the amount of elements in a list
 function list(a)
{
	post();
    post("the list contains",arguments.length, "elements");
}

function loadbang()
{
	post("This is to show that this function is called once when a patch is loaded ");
}
//check the save part to save the state of varibales in the Js object

//this line below makes the function foo private so it can't be accessed from the outside
foo.local = 1;
function foo()
{
	post();
  	post("what does Pd *really* stand for?");
}

function FolderFileAmount (pathName)
{
	f = new Folder(pathName);
	f.typelist = ["TEXT"];
	//this prints out all the names of the files in the folder
	while (!f.end) 
	{
    post(f.filename);
    post();
    f.next();
 	}
  fileAmount = f.count;//is an int which is the amount of files in the folder
 
  post ("the amount of files in the folder is " + fileAmount);
  outlet(0,"the amount of files in the folder is " + fileAmount);

}
function WriteFile(s2)
{
	var f = new File("C:/Users/Andro/Desktop/TestText.txt","write","TEXT"); 
	//var s2 = "I am a file named " + f.filename + ", located in " + f.foldername;

	if (f.isopen) {
		//post("writing string to file: " + s2 + "\n");
		post(s2);
		f.writeline(s2); //writes a string
		//f.writeLine();
		f.close();
	} else {
		post("could not create file: " + s + "\n");
	}
}

function ReadFile(s)
{
	var f = new File(s);
	var i,a,c;

	if (f.isopen) {
		c = f.eof;
		for (i=0;i<c;i++) {
			a = f.readchars(1); //returns an array of single character strings
			post("char at fileposition[" + f.position + "]: " + a + "\n");
		}
		f.close();
	} else {
		post("could not open file: " + s + "\n");
	}
}

function Readlines(s)
{
	var f = new File(s);
	var i,a,c;

	if (f.isopen) {
		i=0;
		while ((a = f.readline()) != null) { // returns a string
			
			post("line[" + i + "]: " + a + "\n");
			i++;
		}
		f.close();
	} else {
		post("could not open file: " + s + "\n");
	}
}

function FileStitcher(pathName)
{
	//make new object of file type
	f = new Folder(pathName);
	//fToWriteTo = new File("C:/Users/Andro/Desktop/TestText.txt","write");
	
	
	//WriteFile(mergedFilePath);
	//f.typelist = ["TEXT"];//defines file type

	//is an int which is the amount of files in the folder
	fileAmount = f.count+1;
	
	//this prints out all the names of the files in the folder
	for (var i = 0; i < fileAmount; i++) 
	{
		post("file length is "  + f.eof); 
	//Print file name to the max console
    post(f.filename);

	//reads all Lines from text file, needs to go into array
	//var currentLine = Readlines(f.pathname+f.filename);
	ReadFile(f.pathname+f.filename);
    //Create empty line
	
	counter = i;
	post("counter test is " + counter);
	
	post();
	post();
	
	//Go to next file.
    f.next();

 	//or make new .JXS file here, then just try to write very line to the 	
	//new file
	
 	
	}
	
	fToWriteTo.close();
  	
  	post ("the amount of files in the folder is " + fileAmount);
  	outlet(0,"the amount of files in the folder is " + fileAmount);
		
}