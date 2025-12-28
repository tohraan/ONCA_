
import React, { useState } from 'react';
import KPICard from '../components/KPICard';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import Select from '../components/Select';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import QuickActions from '../components/QuickActions';
import { Document } from '../types';

const DocumentVault: React.FC = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data
    const documents: Document[] = [
        {
            id: '1',
            filename: 'Invoice_INV-001.pdf',
            type: 'Tax Document',
            size: '2.4 MB',
            uploadDate: 'May 10, 2024',
            version: 'v1',
            category: 'Financial',
            tags: ['ABC Corp', 'January'],
            status: 'processed',
            ocrText: 'Invoice #INV-001 from ABC Corp for ₹45,000',
        },
        {
            id: '2',
            filename: 'GST_Return_Q1.pdf',
            type: 'Compliance',
            size: '1.8 MB',
            uploadDate: 'May 08, 2024',
            version: 'v2',
            category: 'Compliance',
            tags: ['GST', 'Q1 2024'],
            status: 'approved',
            ocrText: 'GST Return for Q1 2024, Total Tax: ₹12,500',
        },
        {
            id: '3',
            filename: 'Contract_TechSol.pdf',
            type: 'Legal',
            size: '3.2 MB',
            uploadDate: 'May 05, 2024',
            version: 'v1',
            category: 'Legal',
            tags: ['Tech Solutions', 'Contract'],
            status: 'pending',
            ocrText: 'Service Agreement with Tech Solutions Pvt Ltd',
        },
        {
            id: '4',
            filename: 'Bank_Statement_Apr.pdf',
            type: 'Financial',
            size: '1.5 MB',
            uploadDate: 'May 01, 2024',
            version: 'v1',
            category: 'Financial',
            tags: ['HDFC', 'April'],
            status: 'processed',
            ocrText: 'HDFC Bank Statement for April 2024',
        },
    ];

    const handleUpload = () => {
        setIsUploadModalOpen(false);
    };

    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 mt-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900">Document Vault</h1>
                    <p className="text-beige-600 text-lg">Secure storage and smart management of all your documents</p>
                </div>
                <QuickActions
                    actions={[
                        {
                            icon: 'upload_file',
                            label: 'Upload Document',
                            onClick: () => setIsUploadModalOpen(true),
                        },
                        {
                            icon: 'drive_folder_upload',
                            label: 'Bulk Upload',
                            onClick: () => console.log('Bulk upload'),
                        },
                        {
                            icon: 'create_new_folder',
                            label: 'Create Folder',
                            onClick: () => console.log('Create folder'),
                        },
                        {
                            icon: 'archive',
                            label: 'Archive Old Files',
                            onClick: () => console.log('Archive files'),
                        },
                    ]}
                />
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                    title="Total Documents"
                    value="1,247"
                    icon="description"
                    iconColor="text-primary"
                    iconBg="bg-primary/10"
                    subtitle="23 added this month"
                />
                <KPICard
                    title="Storage Used"
                    value="2.4 GB"
                    icon="cloud"
                    iconColor="text-blue-600"
                    iconBg="bg-blue-50"
                    subtitle="of 10 GB"
                />
                <KPICard
                    title="Categories"
                    value="12"
                    icon="folder"
                    iconColor="text-amber-600"
                    iconBg="bg-amber-50"
                    subtitle="organized folders"
                />
                <KPICard
                    title="Pending Review"
                    value="8"
                    icon="pending_actions"
                    iconColor="text-red-600"
                    iconBg="bg-red-50"
                    subtitle="need attention"
                />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-card p-6 shadow-card border border-beige-200 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <SearchBar
                        placeholder="Search by filename or OCR text..."
                        onSearch={setSearchQuery}
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Categories' },
                            { value: 'financial', label: 'Financial' },
                            { value: 'legal', label: 'Legal' },
                            { value: 'compliance', label: 'Compliance' },
                        ]}
                        fullWidth={false}
                        className="min-w-[180px]"
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Types' },
                            { value: 'tax', label: 'Tax Document' },
                            { value: 'invoice', label: 'Invoice' },
                            { value: 'contract', label: 'Contract' },
                        ]}
                        fullWidth={false}
                        className="min-w-[150px]"
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Status' },
                            { value: 'processed', label: 'Processed' },
                            { value: 'pending', label: 'Pending' },
                            { value: 'approved', label: 'Approved' },
                        ]}
                        fullWidth={false}
                        className="min-w-[150px]"
                    />
                    <button className="text-primary hover:text-primary-dark font-semibold whitespace-nowrap">
                        Clear
                    </button>
                </div>
            </div>

            {/* Document List */}
            <div className="bg-white rounded-card shadow-card border border-beige-200">
                <div className="divide-y divide-beige-100">
                    {documents.map((doc) => (
                        <div
                            key={doc.id}
                            className="p-6 hover:bg-beige-50 transition-colors cursor-pointer group"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <span className="material-icons-round">description</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <p className="font-bold text-beige-900">{doc.filename}</p>
                                            <StatusBadge
                                                status={
                                                    doc.status === 'processed' ? 'success' :
                                                        doc.status === 'approved' ? 'info' : 'warning'
                                                }
                                                label={doc.status}
                                                size="sm"
                                            />
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-beige-600 mb-3">
                                            <span>{doc.type}</span>
                                            <span className="text-beige-400">•</span>
                                            <span>{doc.size}</span>
                                            <span className="text-beige-400">•</span>
                                            <span>{doc.uploadDate}</span>
                                            <span className="text-beige-400">•</span>
                                            <span>{doc.version}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <StatusBadge status="info" label={doc.category} size="sm" />
                                            {doc.tags.map((tag) => (
                                                <StatusBadge key={tag} status="pending" label={tag} size="sm" />
                                            ))}
                                        </div>
                                        <div className="bg-beige-50 rounded-lg p-3 border border-beige-200">
                                            <p className="text-xs font-bold text-beige-600 uppercase tracking-wider mb-1">
                                                OCR Extract
                                            </p>
                                            <p className="text-sm text-beige-700">{doc.ocrText}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 ml-4">
                                    <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                                        <span className="material-icons-round text-beige-600">visibility</span>
                                    </button>
                                    <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                                        <span className="material-icons-round text-beige-600">file_download</span>
                                    </button>
                                    <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                                        <span className="material-icons-round text-beige-600">share</span>
                                    </button>
                                    <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                                        <span className="material-icons-round text-beige-600">more_vert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Upload Modal */}
            <Modal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                title="Upload Document"
                subtitle="Upload and categorize your document with smart tagging"
                size="md"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsUploadModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" icon="upload" onClick={handleUpload}>
                            Upload & Process
                        </Button>
                    </>
                }
            >
                <div className="space-y-6">
                    <div className="border-2 border-dashed border-beige-300 rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                        <span className="material-icons-round text-5xl text-beige-400 mb-4">cloud_upload</span>
                        <p className="font-bold text-beige-900 mb-2">Click to select file</p>
                        <p className="text-sm text-beige-600">or drag and drop here</p>
                        <p className="text-xs text-beige-500 mt-2">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                    </div>

                    <Select
                        label="Category"
                        options={[
                            { value: '', label: 'Select category' },
                            { value: 'financial', label: 'Financial' },
                            { value: 'legal', label: 'Legal' },
                            { value: 'compliance', label: 'Compliance' },
                        ]}
                        required
                    />

                    <Input
                        label="Tags (comma separated)"
                        placeholder="e.g., Invoice, ABC Corp, January"
                    />

                    <Textarea
                        label="Description"
                        placeholder="Add notes or context about this document"
                        rows={3}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default DocumentVault;
