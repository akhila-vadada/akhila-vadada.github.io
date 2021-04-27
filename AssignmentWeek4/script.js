var names=new Array();
names[0]="Akhila";
names[1]="Jaanu";
names[2]="Sahithi";
names[3]="jimin";
names[4]="Taehyung";
names[5]="Jungkook";
names[6]="Namjoon";
names[7]="seojoon";
names[8]="Krithika";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
