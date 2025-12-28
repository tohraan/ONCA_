

import React, { useState } from 'react';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import Select from '../components/Select';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import QuickActions from '../components/QuickActions';
import { Client } from '../types';

const ClientManagement: React.FC = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data
    const clients: Client[] = [
        {
            id: '1',
            companyName: 'ABC Corporation',
            contactPerson: 'John Doe',
            email: 'john@abc.com',
            phone: '+91 98765 43210',
            businessType: 'Retail',
            assignedCA: 'CA Priya Sharma',
            panNumber: 'ABCTY1234D',
            gstin: '27ABCTY1234D1Z5',
            address: 'Mumbai, Maharashtra',
            complianceStatus: 'overdue',
            nextTask: 'TDS Return',
            dueDate: '2025-01-05',
        },
        {
            id: '2',
            companyName: 'Tech Solutions Pvt Ltd',
            contactPerson: 'Sarah Smith',
            email: 'sarah@techsol.com',
            phone: '+91 98765 43211',
            businessType: 'IT Services',
            assignedCA: 'CA Rajesh Gupta',
            panNumber: 'DEFGH5678E',
            gstin: '27DEFGH5678E1Z5',
            address: 'Bangalore, Karnataka',
            complianceStatus: 'pending',
            nextTask: 'GST Return',
            dueDate: '2025-01-10',
        },
        {
            id: '3',
            companyName: 'Manufacturing Co',
            contactPerson: 'Mike Johnson',
            email: 'mike@mfg.com',
            phone: '+91 98765 43212',
            businessType: 'Manufacturing',
            assignedCA: 'CA Priya Sharma',
            panNumber: 'IJKLM9012F',
            address: 'Pune, Maharashtra',
            complianceStatus: 'up-to-date',
            nextTask: 'Income Tax',
            dueDate: '2025-01-20',
        },
    ];

    const handleAddClient = () => {
        // Handle form submission
        setIsAddModalOpen(false);
    };

    return (
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6 mt-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2 tracking-tight text-beige-900">Client Management</h1>
                    <p className="text-beige-600 text-lg">Manage your clients and their compliance requirements</p>
                </div>
                <QuickActions
                    actions={[
                        {
                            icon: 'person_add',
                            label: 'Add New Client',
                            onClick: () => setIsAddModalOpen(true),
                        },
                        {
                            icon: 'upload_file',
                            label: 'Bulk Import Clients',
                            onClick: () => console.log('Bulk import'),
                        },
                        {
                            icon: 'file_download',
                            label: 'Export Client List',
                            onClick: () => console.log('Export'),
                        },
                        {
                            icon: 'notifications',
                            label: 'Send Reminder to Client',
                            onClick: () => console.log('Send reminder'),
                        },
                    ]}
                />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-card p-6 shadow-card border border-beige-200 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <SearchBar
                        placeholder="Search clients..."
                        onSearch={setSearchQuery}
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Types' },
                            { value: 'retail', label: 'Retail' },
                            { value: 'it', label: 'IT Services' },
                            { value: 'manufacturing', label: 'Manufacturing' },
                        ]}
                        fullWidth={false}
                        className="min-w-[200px]"
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All Status' },
                            { value: 'up-to-date', label: 'Up to Date' },
                            { value: 'pending', label: 'Pending' },
                            { value: 'overdue', label: 'Overdue' },
                        ]}
                        fullWidth={false}
                        className="min-w-[200px]"
                    />
                    <Select
                        options={[
                            { value: 'all', label: 'All CAs' },
                            { value: 'priya', label: 'CA Priya Sharma' },
                            { value: 'rajesh', label: 'CA Rajesh Gupta' },
                        ]}
                        fullWidth={false}
                        className="min-w-[200px]"
                    />
                    <button className="text-primary hover:text-primary-dark font-semibold whitespace-nowrap">
                        Clear
                    </button>
                </div>
            </div>

            {/* Client Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client) => (
                    <div
                        key={client.id}
                        className="bg-white rounded-card p-card shadow-card border border-beige-200 hover:shadow-card-hover transition-all cursor-pointer"
                    >
                        {/* Client Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-lg">
                                    {client.companyName.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-beige-900">{client.companyName}</h3>
                                    <p className="text-sm text-beige-600">{client.contactPerson}</p>
                                </div>
                            </div>
                            <button className="p-2 hover:bg-beige-100 rounded-full transition-colors">
                                <span className="material-icons-round text-beige-600">more_vert</span>
                            </button>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mb-4">
                            <StatusBadge
                                status="info"
                                label={client.businessType}
                                size="sm"
                            />
                            <StatusBadge
                                status={
                                    client.complianceStatus === 'up-to-date' ? 'success' :
                                        client.complianceStatus === 'pending' ? 'warning' : 'danger'
                                }
                                label={client.complianceStatus}
                                size="sm"
                            />
                        </div>

                        {/* Compliance Info */}
                        <div className="bg-beige-50 rounded-xl p-4 border border-beige-200">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-beige-600 uppercase tracking-wider">Next Task</span>
                                <span className="text-xs text-beige-500">{client.dueDate}</span>
                            </div>
                            <p className="font-bold text-beige-900 mb-2">{client.nextTask}</p>
                            <p className="text-sm text-beige-600">Assigned: {client.assignedCA}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Client Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Add New Client"
                subtitle="Create a new client profile with all necessary details"
                size="lg"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" icon="save" onClick={handleAddClient}>
                            Create Client
                        </Button>
                    </>
                }
            >
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Company Name"
                            placeholder="Enter company name"
                            required
                        />
                        <Input
                            label="Contact Person"
                            placeholder="Enter contact person"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="email@example.com"
                            icon="email"
                            required
                        />
                        <Input
                            label="Phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            icon="phone"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Select
                            label="Business Type"
                            options={[
                                { value: '', label: 'Select type' },
                                { value: 'retail', label: 'Retail' },
                                { value: 'it', label: 'IT Services' },
                                { value: 'manufacturing', label: 'Manufacturing' },
                            ]}
                            required
                        />
                        <Select
                            label="Assigned CA"
                            options={[
                                { value: '', label: 'Select CA' },
                                { value: 'priya', label: 'CA Priya Sharma' },
                                { value: 'rajesh', label: 'CA Rajesh Gupta' },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="PAN Number"
                            placeholder="ABCTY1234D"
                            required
                        />
                        <Input
                            label="GSTIN"
                            placeholder="27ABCTY1234D1Z5"
                        />
                    </div>

                    <Textarea
                        label="Address"
                        placeholder="Enter complete address"
                        rows={3}
                    />

                    <Textarea
                        label="Notes"
                        placeholder="Any special requirements or notes"
                        rows={3}
                    />
                </div>
            </Modal>
        </div>
    );
};

export default ClientManagement;
