import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons/faCloudDownloadAlt';
import { useFiles } from '../../../hooks/useFiles';

export default () => {
    const files = useFiles();

    const onClick = () => {
        const zip = new JSZip();

        files.forEach(file => zip.file(file.name, file));

        zip.generateAsync({ type: 'blob' }).then(content => {
            FileSaver.saveAs(content, 'profile.zip');
        });
    };

    return (
        <div>
            <Button className="shadow-sm" onClick={onClick}>
                <FontAwesomeIcon icon={faCloudDownloadAlt} size="sm" className="mr-2" />
                Download files
            </Button>
            <Form.Text>
                This is your profile and you can download it!
                <br />
                The download includes:
                <ul className="p-3 my-n3">
                    <li>
                        <strong>index.html</strong>: your profile in a web format
                    </li>
                    <li>
                        <strong>data.json</strong>: you can use it to import and edit your profile
                    </li>
                </ul>
            </Form.Text>
        </div>
    );
};
