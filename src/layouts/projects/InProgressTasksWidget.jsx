import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader, ArrowRight, Circle, ChevronRight } from 'lucide-react';
import taskService from '../../services/taskServices';
import '../../styles/InLineProgress.css'; // Make sure to import the CSS file

const TaskItem = ({ task, onClick }) => {
    return (
        <li className="task-item" onClick={onClick}>
            <div className="task-item-details">
                <Circle 
                    size={10} 
                    fill="#3b82f6" 
                    color="#3b82f6" 
                    style={{ flexShrink: 0 }} 
                />
                <span className="task-item-title">
                    {task.title}
                </span>
            </div>
            
            <ChevronRight 
                size={14} 
                className="task-item-chevron"
            />
        </li>
    );
};

const InProgressTasksWidget = ({ milestones }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeMilestone, setActiveMilestone] = useState(null);
    const navigate = useNavigate();

    // 1. Identify the Active Milestone
    useEffect(() => {
        if (!milestones) return;
        const current = milestones.find(m => m.status === 'IN_PROGRESS');
        setActiveMilestone(current || null);
    }, [milestones]);

    // 2. Fetch Tasks for that Milestone
    useEffect(() => {
        const fetchTasks = async () => {
            if (!activeMilestone) {
                setTasks([]);
                return;
            }

            setLoading(true);
            try {
                const data = await taskService.getTasksByMilestone(activeMilestone.id);
                // Filter for IN_PROGRESS only
                const inProgress = data.filter(t => t.status === 'IN_PROGRESS');
                setTasks(inProgress);
            } catch (error) {
                console.error("Failed to fetch active tasks", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [activeMilestone]);

    if (!activeMilestone) return null;

    const handleNavigate = () => {
        navigate(`/projects/${activeMilestone.projectId}/milestones/${activeMilestone.id}/tasks`);
    };

    return (
        <div className="sidebar-card widget-container">
            <div className="section-heading">
                <h3>IN PROGRESS</h3>
            </div>
            
            <div className="phase-info">
                Current Phase: <span className="phase-name">{activeMilestone.name}</span>
            </div>

            <div className="widget-content">
                {loading ? (
                    <div className="status-message">
                       <Loader size={14} className="animate-spin" /> Loading tasks...
                    </div>
                ) : tasks.length === 0 ? (
                    <p className="status-message empty">
                        No tasks currently in progress.
                    </p>
                ) : (
                    <ul className="task-list">
                        {tasks.slice(0, 5).map(task => (
                            <TaskItem 
                                key={task.id} 
                                task={task} 
                                onClick={handleNavigate} 
                            />
                        ))}
                    </ul>
                )}
            </div>

            <button 
                className="navigate-btn"
                onClick={handleNavigate}
            >
                Go to Task Board <ArrowRight size={14}/>
            </button>
        </div>
    );
};

export default InProgressTasksWidget;