class a {
    try {
Object refVar;
System.out.println(refVar.toString());
}

catch (NullPointerException ex) {
System.out.println("refVar is null");
}


if (refVar != null)
System.out.println(refVar.toString());

else
System.out.println("refVar is null");
}}
