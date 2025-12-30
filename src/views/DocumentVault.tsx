
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

    // Mock data
    const documents: Document[] = [
        {
            id: '1',
            filename: 'GST Return May 2024.pdf',
            category: 'Tax',
            type: 'pdf',
            size: '2.4 MB',
            uploadDate: '2024-05-10',
            version: '1.0',
            tags: ['GST', '2024'],
            status: 'approved',
            ocrText: '',
        },
        {
            id: '2',
            filename: 'Profit & Loss Statement.xlsx',
            category: 'Financials',
            type: 'xlsx',
            size: '1.2 MB',
            uploadDate: '2024-05-08',
            version: '1.0',
            tags: ['P&L', 'Finance'],
            status: 'pending',
            ocrText: '',
        },
        {
            id: '3',
            filename: 'PAN Card Copy.jpg',
            category: 'KYC',
            type: 'jpg',
            size: '800 KB',
            uploadDate: '2024-05-05',
            version: '1.0',
            tags: ['PAN', 'KYC'],
            status: 'approved',
            ocrText: '',
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
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900 dark:text-dark-text-primary">Document Vault</h1>
                    <p className="text-beige-600 dark:text-dark-text-secondary text-lg">Securely store and manage client documents and compliance filings</p>
                </div>
                <QuickActions
                    actions={[
                        {
                            icon: 'file_upload',
                            label: 'Upload Document',
                            onClick: () => setIsUploadModalOpen(true),
                        },
                        {
                            icon: 'create_new_folder',
                            label: 'New Folder',
                            onClick: () => console.log('New folder'),
                        },
                        {
                            icon: 'share',
                            label: 'Share Vault',
                            onClick: () => console.log('Share'),
                        },
                        {
                            icon: 'history',
                            label: 'View History',
                            onClick: () => console.log('History'),
                        },
                    ]}
                />
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                    title="Storage Used"
                    value="42.5 GB"
                    icon="storage"
                    iconColor="text-primary dark:text-dark-accent"
                    iconBg="bg-primary/10 dark:bg-dark-accent/10"
                    subtitle="of 100 GB"
                />
                <KPICard
                    title="Total Documents"
                    value="1,248"
                    icon="description"
                    iconColor="text-blue-600 dark:text-blue-400"
                    iconBg="bg-blue-50 dark:bg-blue-900/10"
                />
                <KPICard
                    title="Verified items"
                    value="98%"
                    icon="verified"
                    iconColor="text-emerald-600 dark:text-emerald-400"
                    iconBg="bg-emerald-50 dark:bg-emerald-900/10"
                />
                <KPICard
                    title="Pending Review"
                    value="24"
                    icon="pending"
                    iconColor="text-amber-600 dark:text-amber-400"
                    iconBg="bg-amber-50 dark:bg-amber-900/10"
                />
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-card p-6 shadow-card border border-beige-200 dark:border-white/5 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <SearchBar
                        placeholder="Search documents..."
                        onSearch={() => { }}
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Categories' },
                            { value: 'tax', label: 'Tax' },
                            { value: 'financials', label: 'Financials' },
                            { value: 'kyc', label: 'KYC' },
                        ]}
                        fullWidth={false}
                        className="min-w-[200px]"
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Clients' },
                            { value: 'abc', label: 'ABC Corporation' },
                            { value: 'tech', label: 'Tech Solutions' },
                        ]}
                        fullWidth={false}
                        className="min-w-[200px]"
                    />
                    <button className="text-primary dark:text-dark-accent hover:text-primary-dark dark:hover:text-white font-semibold whitespace-nowrap">
                        Clear
                    </button>
                </div>
            </div>

            {/* Document List */}
            <div className="bg-white dark:bg-dark-surface/65 backdrop-blur-xl rounded-card shadow-card border border-beige-200 dark:border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-beige-50 dark:bg-white/5 border-b border-beige-200 dark:border-white/5">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Size</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-beige-700 dark:text-dark-text-secondary uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-beige-100 dark:divide-white/5">
                            {documents.map((doc) => (
                                <tr key={doc.id} className="hover:bg-beige-50 dark:hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="material-icons-round text-beige-400 dark:text-dark-text-disabled">
                                                {doc.filename.endsWith('.pdf') ? 'picture_as_pdf' :
                                                    doc.filename.endsWith('.xlsx') ? 'table_chart' : 'image'}
                                            </span>
                                            <p className="font-bold text-beige-900 dark:text-dark-text-primary">{doc.filename}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-beige-600 dark:text-dark-text-secondary">{doc.category}</td>
                                    <td className="px-6 py-4 text-sm text-beige-600 dark:text-dark-text-secondary">{doc.uploadDate}</td>
                                    <td className="px-6 py-4 text-sm text-beige-600 dark:text-dark-text-secondary">{doc.size}</td>
                                    <td className="px-6 py-4">
                                        <StatusBadge
                                            status={doc.status === 'approved' ? 'success' : 'warning'}
                                            label={doc.status}
                                            size="sm"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 hover:bg-beige-100 dark:hover:bg-white/10 rounded-lg transition-colors text-beige-600 dark:text-dark-text-secondary">
                                                <span className="material-icons-round">file_download</span>
                                            </button>
                                            <button className="p-2 hover:bg-beige-100 dark:hover:bg-white/10 rounded-lg transition-colors text-beige-600 dark:text-dark-text-secondary">
                                                <span className="material-icons-round">share</span>
                                            </button>
                                            <button className="p-2 hover:bg-beige-100 dark:hover:bg-white/10 rounded-lg transition-colors text-beige-600 dark:text-dark-text-secondary">
                                                <span className="material-icons-round">more_vert</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Upload Modal */}
            <Modal
                isOpen={isUploadModalOpen}
                onClose={() => setIsUploadModalOpen(false)}
                title="Upload Document"
                subtitle="Upload files to client folders"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsUploadModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" icon="cloud_upload" onClick={handleUpload}>
                            Upload File
                        </Button>
                    </>
                }
            >
                <div className="space-y-6">
                    <div className="border-2 border-dashed border-beige-200 dark:border-white/10 rounded-xl p-8 text-center hover:border-primary dark:hover:border-dark-accent transition-colors cursor-pointer group">
                        <span className="material-icons-round text-4xl text-beige-300 dark:text-dark-text-disabled group-hover:text-primary dark:group-hover:text-dark-accent transition-colors mb-4">cloud_upload</span>
                        <p className="text-beige-900 dark:text-dark-text-primary font-bold mb-1">Drag and drop files here</p>
                        <p className="text-beige-500 dark:text-dark-text-secondary text-sm">or click to browse from your computer</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Select
                            label="Client"
                            options={[
                                { value: '', label: 'Select client' },
                                { value: 'abc', label: 'ABC Corporation' },
                                { value: 'tech', label: 'Tech Solutions' },
                            ]}
                            required
                        />
                        <Select
                            label="Category"
                            options={[
                                { value: '', label: 'Select category' },
                                { value: 'tax', label: 'Tax' },
                                { value: 'financials', label: 'Financials' },
                                { value: 'kyc', label: 'KYC' },
                            ]}
                            required
                        />
                    </div>

                    <Input
                        label="Document Name"
                        placeholder="Enter name (optional)"
                    />

                    <Textarea
                        label="Description"
                        placeholder="Add a brief description of the document"
                        rows={3}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default DocumentVault;
