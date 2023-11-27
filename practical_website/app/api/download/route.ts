import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, roll_no, batch, experiment, classNo } = await req.json();
        const rootPath = path.resolve(process.cwd());
        const filePath = path.join(rootPath,'data')

        const content = fs.readFileSync(
            path.resolve(filePath, `${experiment}.docx`),
            'binary'
        );

        const zip = new PizZip(content);

        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });

        doc.render({
            name: name,
            roll_no: roll_no,
            experiment: experiment,
            classNo: classNo,
            batch: batch,
        });

        const buf = doc.getZip().generate({
            type: 'nodebuffer',
            compression: 'DEFLATE',
        });

        const fileName = `${name}_${experiment}.docx`;
        const filePathWithName = path.resolve(path.join(filePath,fileName))

        fs.writeFileSync(filePathWithName, buf);
        const file = await fs.openAsBlob(filePathWithName);
        return new NextResponse(file,{headers:{'Content-Disposition': `attachment; filename=${fileName}`,'Content-Type': 'application/docx'}})
    } catch (error) {
        return NextResponse.json({ message: 'Error generating document' }, { status: 500 });
    }
}

export async function DELETE(req:NextRequest){
    const {doc} = await req.json()
    const filePathWithName = path.resolve(path.join('data',doc))
    fs.unlinkSync(filePathWithName)
    return NextResponse.json('success')
}